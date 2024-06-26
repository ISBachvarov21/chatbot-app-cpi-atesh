import os
from langchain_community.llms import HuggingFaceEndpoint
from langchain_community.embeddings.sentence_transformer import SentenceTransformerEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_text_splitters import CharacterTextSplitter
from langchain import hub
from langchain_core.runnables import RunnablePassthrough
# from langchain_community.document_loaders import WebBaseLoader
from langchain_community.document_loaders import TextLoader
import warnings
import logging

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

warnings.filterwarnings("ignore")
logging.getLogger().setLevel(logging.ERROR)

os.environ["HUGGINGFACEHUB_API_TOKEN"] = "hf_xxx" # replace "xxx" with your Hugging Face API token

repo_id = "meta-llama/Meta-Llama-3-8B-Instruct"

llm = HuggingFaceEndpoint(repo_id=repo_id)

print("\u001b[1;32mLoaded LLM model successfully!\u001b[0m")

# links = [
#     'https://www.codingburgas.bg/?lang=en',
#     'https://www.codingburgas.bg/%d0%b7%d0%b0-%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d1%86%d0%b8/%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%bd%d0%be-%d0%be%d1%81%d0%b8%d0%b3%d1%83%d1%80%d1%8f%d0%b2%d0%b0%d0%bd%d0%b5/',
#     'https://www.codingburgas.bg/%d0%b7%d0%b0-%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d1%86%d0%b8/%d0%bf%d1%80%d0%b8%d0%bb%d0%be%d0%b6%d0%bd%d0%be-%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%b8%d1%80%d0%b0%d0%bd%d0%b5/',
#     'https://www.codingburgas.bg/%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%b8%d1%80%d0%b0%d0%bd%d0%b5-%d0%bd%d0%b0-%d0%b8%d0%b7%d0%ba%d1%83%d1%81%d1%82%d0%b2%d0%b5%d0%bd-%d0%b8%d0%bd%d1%82%d0%b5%d0%bb%d0%b5%d0%ba%d1%82/',
#     'https://www.codingburgas.bg/%d0%b7%d0%b0-%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d1%86%d0%b8/%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%b8%d1%80%d0%b0%d0%bd%d0%b5-%d0%bd%d0%b0-%d1%80%d0%be%d0%b1%d0%be%d1%82%d0%b8/'
# ]

# data = list()

# for link in links:
#     loader = WebBaseLoader(link)
#     data.extend(loader.load())

data = list()

data = TextLoader("data.txt", encoding='utf-8').load()

text_splitter = CharacterTextSplitter(separator='<end>',chunk_size=500, chunk_overlap=200)
docs = text_splitter.split_documents(data)

print("\u001b[1;32mLoaded data successfully!\u001b[0m")

embedding_function = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")

db = Chroma.from_documents(docs, embedding_function)

retriever = db.as_retriever(search_type="mmr", search_kwargs={'k': 4, 'fetch_k': 20})
prompt = hub.pull("rlm/rag-prompt")

print("\u001b[1;32mLoaded retriever, prompt and db successfully!\u001b[0m")

rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
)

# documents = retriever.invoke("When was VSCPI opened?")

# for doc in documents:
#     print(doc.page_content)

print("\u001b[1;32mLoaded RAG chain successfully!\u001b[0m")
print("\u001b[1;34mGetting answer...\u001b[0m")
print(f"\n\u001b[1;32mAI:{rag_chain.invoke("When did VSCPI open?")}\u001b[0m")
"""
Module handling the data reading, preparation, and cleaning for model use. Since different
models might have different requirements for data quality and content, the methods in this
module should be flexible or diverse enough to handle those requirements.
"""
 
import requests as requests
import bs4 as bs4
 
url: str = "https://www.codingburgas.bg/за-нас/училищно-настоятелство/"
response: requests.Response = requests.get(url)
 
soup: bs4.BeautifulSoup = bs4.BeautifulSoup(response.content, 'html.parser')

text_elements: bs4.element.ResultSet[any] = soup.find_all('p')

text: str = ''
 
for paragraph in text_elements:
    paragraph_str: str = paragraph.get_text()
 
    if paragraph_str.isspace() or not paragraph_str.strip():
        continue
 
    text += paragraph_str + '\n'

print(f'\033[1;32m[+] Text found: {text}\033[0m\n')
print(f'\033[1;34m[*] Trying to write the text to data/scraped/data.txt...\033[0m')

try:
    with open('data/scraped/data.txt', 'w', encoding='utf-8') as file:
        file.write(text)
    print(f'\033[1;32m[+] Text written to file successfully!\033[0m')
except Exception as e:
    print(f'\033[1;31m[-] An error occurred while writing to data/scraped/data.txt: {e}\033[0m')
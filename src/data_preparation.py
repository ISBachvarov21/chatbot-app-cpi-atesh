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

text: bs4.element.ResultSet[any] = soup.find_all('p')
 
for p in text:
    p_str: str = p.get_text()
 
    if p_str.isspace() or not p_str.strip():
        continue
 
    print(f'\033[1;34m[*] Paragraph found: {p_str}\033[0m\n')
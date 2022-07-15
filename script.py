import requests
import json
from pprint import pprint
import pandas as pd
 
#res=requests.get("https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1010500052754215147")
json_open = open('recipe.json', 'r')


#json_data = json.loads(res.text)
json_data = json.load(json_open)
#    json.dump(json_data, f, ensure_ascii=True)
#pprint(json_data)
 
 
 
# mediumカテゴリの親カテゴリの辞書
parent_dict = {}
 
df = pd.DataFrame(columns=['category1','category2','category3','categoryId','categoryName'])
 
# 大カテゴリ
for category in json_data['result']['large']:
    df_append = pd.DataFrame({'category1':[category['categoryId']],'category2':[""],'category3':[""],'categoryId':[category['categoryId']],'categoryName':[category['categoryName']]})
    df = pd.concat([df, df_append], ignore_index=True, axis=0)
 
for category in json_data['result']['medium']:
    df_append = pd.DataFrame({'category1':[category['parentCategoryId']],'category2':[category['categoryId']],'category3':[""],'categoryId':[str(category['parentCategoryId'])+"-"+str(category['categoryId'])],'categoryName':[category['categoryName']]})
    df = pd.concat([df, df_append], ignore_index=True, axis=0)
    parent_dict[str(category['categoryId'])] = category['parentCategoryId']
 
# 小カテゴリ
for category in json_data['result']['small']:
    df_append = pd.DataFrame({'category1':[parent_dict[category['parentCategoryId']]],'category2':[category['parentCategoryId']],'category3':[category['categoryId']],'categoryId':[parent_dict[category['parentCategoryId']]+"-"+str(category['parentCategoryId'])+"-"+str(category['categoryId'])],'categoryName':[category['categoryName']]})
    df = pd.concat([df, df_append], ignore_index=True, axis=0)



_query = 'categoryName.str.contains("' + input() + '")'
df_keyword = df.query(_query, engine='python')

res2=requests.get("https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1010500052754215147&categoryId="+ df_keyword.iloc[0,3] + "&elements=recipeTitle,recipeUrl,recipeMaterial")

recipe_data=json.loads(res2.text)["result"]

a=""
for recipe in recipe_data:
    a+=recipe["recipeTitle"]+"\n"
    a+=recipe["recipeUrl"]+"\n"
    for material in recipe["recipeMaterial"]:
        a+=material+" "
    a+="\n\n"

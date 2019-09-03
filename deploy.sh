
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
vuepress build docs

cd docs/.vuepress/dist

git add -A
git commit -m 'deploy'

git push -f git@github.com:GyuanHFUT/GyuanHFUT.github.io.git master

git push -f git@github.com:GyuanHFUT/<REPO>.git master:gh-pages

cd -
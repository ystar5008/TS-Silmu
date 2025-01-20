if [ -z "$1" ]; then
    echo "커밋 메시지를 입력해주세요."
    echo "사용법: ./push.sh \"커밋 메시지\""
    exit 1
fi

git add .
git commit -m "$1"
git push
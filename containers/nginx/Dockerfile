FROM nginx:stable-alpine
LABEL maintainer "Tsunemasa Hachiya"
SHELL ["/bin/ash", "-oeux", "pipefail", "-c"]

# nginx設定ファイルの削除
RUN rm -rf /var/cache/apk/* && \
    rm -rf /tmp/* && \
    rm -f /etc/nginx/conf.d/* && \
    rm -f /etc/nginx/nginx.conf && \
    apk --update add tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata && \
    rm -rf /var/cache/apk/*

# Nginxの設定ファイルをコンテナにコピー
ADD nginx.conf /etc/nginx/nginx.conf
ADD default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

# ビルド完了後にNginxを起動
CMD ["nginx", "-g", "daemon off;"]


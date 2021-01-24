FROM postgres:12.3-alpine
LABEL maintainer "Tsunemasa Hachiya"
SHELL ["/bin/ash", "-oeux", "pipefail", "-c"]

# ENV LANG C

RUN rm -rf /var/cache/apk/* && \
    rm -rf /tmp/* && \
    apk --no-cache update && \
    apk --no-cache upgrade

# Postgresqlの設定ファイルをコンテナにコピー
ADD postgresql.conf /etc/postgresql/12/main/postgresql.conf
ADD pg_hba.conf /etc/postgresql/12/main/pg_hba.conf

# catDetectorFE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## test on httpd (apache2) with dist solution

```shell
docker build -f Dockerfile -t httpdCatDetectorFE .
docker run -it -p 127.0.0.1:80:80 httpdCatDetectorFE
```
et a chaque changement de dist refaire les 2 lignes.


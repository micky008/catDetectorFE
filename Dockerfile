FROM httpd
COPY dist/catDetectorFE/browser /usr/local/apache2/htdocs

EXPOSE 80

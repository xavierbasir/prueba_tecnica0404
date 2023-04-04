#********** Fisrt Step ***********
# Instalar version de node
FROM node:16.13.0-alpine as builder
# Definir /app como directorio de trabajo
WORKDIR /app
# Copie todo de la ruta actual a /app
COPY --chown=node:node . /app
# Instalar las dependencias del package.json
RUN npm install
# Crea proyecto, codigo construido en /dist
RUN npm run build

USER node


#********** Second Step ************
FROM nginx:1.17.10-alpine
# Exponer puerto 80 dentro del contenedor
EXPOSE 80
# Config nginx default.conf
# COPY /config/dev/default.conf /etc/nginx/conf.d
# Copie el codigo construido de builder (/dist) a la sgte ruta en el contenedor
COPY --from=builder /app/dist /usr/share/nginx/html

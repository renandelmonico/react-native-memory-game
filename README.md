# Jogo da memória

## Requisitos

Construído com os requisitos abaixo
```
{
  buildToolsVersion = "28.0.3"
  minSdkVersion = 16
  compileSdkVersion = 28
  targetSdkVersion = 28
  supportLibVersion = "28.0.0"
}
```

## Instalação

Após clonar é necessário fazer a instalação das dependências
```
npm install
```

Após instalar as dependências, deve-se gerar o arquivo debug.keystore dentro da pasta `android/app` rodando o comando abaixo
```
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

E para finalmente rodar o projeto...
```
react-native run-android
```

> <cite>Obs: APP não testado com iOS</cite>

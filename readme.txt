clasp login

clasp create

Slecciona: appweb

npm init -y

npm install --save-dev @type/google-apps-script


Crea un archivo en la raiz del proyecto: tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es2015"],
    "module": "none",
    "types": ["google-apps-script"]
  }
}

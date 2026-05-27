# Idioma P - Traductor en JavaScript (Node.js)

Traductor de castellano al **Idioma P**: por cada vocal en una palabra, se duplica y se intercala una `p` entre ambas.

> Ejemplo: `hola` → `hopolapa`

## Cómo ejecutar

Requisitos: tener Node.js instalado.

```bash
node idiomaP.js
```

Te pide una frase por consola y devuelve la traducción.

## Ejemplos

| Entrada | Salida |
|---|---|
| `hola` | `hopolapa` |
| `Ah Caray! Esto es mucho calculo!` | `Apah Caparapay! Epestopo epes mupuchopo capalcupulopo!` |

## Lógica

Se recorre la frase carácter por carácter usando `length` y `charAt()`. Si el carácter es una vocal, se reemplaza por `vocal + "p" + vocal`. Si la vocal está en mayúscula, la `P` también queda en mayúscula y la vocal duplicada en minúscula (para respetar el ejemplo `Ah` → `Apah`).

## Autor

Ignacio Ifran — EEST N°5 Amancio Williams

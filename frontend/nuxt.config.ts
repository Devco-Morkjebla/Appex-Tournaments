import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    target: 'server',
		srcDir: './',
		build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          }
        }
      },
    },
    head: {
        script: [
            {
                src: "https://kit.fontawesome.com/0cda3bb6df.js"
            }
        ],
        link: [
            { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
            { rel: "icon", type: "image/x-icon", href: "/appexico.ico" }
        ]
    },
    modules: [
    ],
    buildModules: [

    ],
    /*axios: {
      baseURL: "http://localhost:3001"
    },*/
    publicRuntimeConfig: {
      axios: {
        //browserBaseURL: 'http://localhost:3001'
        browserBaseURL: 'https://appex-tournaments-gylkpaupva-uc.a.run.app'
      }
    },
    privateRuntimeConfig: {
      baseURL: 'https://appex-tournaments-gylkpaupva-uc.a.run.app'
    }
})

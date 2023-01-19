import vitePluginString from 'vite-plugin-string'

const options = 
{
    /* Default */
    include: [
        '**/*.html'
    ],

    /* Default: undefined */
    exclude: 'node_modules/**',

}


export default {
  plugins: [
    vitePluginString(options)
  ]
}
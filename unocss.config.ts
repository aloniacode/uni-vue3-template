import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetWeapp } from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default defineConfig({
  presets: [
    presetWeapp(),
    presetWeappAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  // https://github.com/unocss/unocss#shortcuts
  shortcuts: {
    "center": "flex justify-center items-center"
  },
  transformers: [
    // enable @apply
    transformerDirectives({
      enforce: 'pre',
    }),
    transformerVariantGroup(),
    transformerAttributify(),
    transformerClass(),
  ],
})

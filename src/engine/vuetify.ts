import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { pt } from 'vuetify/locale'
import { VCalendar } from 'vuetify/labs/VCalendar'
import { VDateInput } from 'vuetify/labs/components'
import colors from 'vuetify/util/colors'

export default createVuetify({
  locale: {
    locale: 'pt',
    messages: { pt }
  },
  theme: {
    defaultTheme: 'dark', // Tema padrão ao iniciar a aplicação
    themes: {
      dark: {
        // Configuração do tema escuro
        dark: true,
        colors: {
          primary: colors.lightBlue.darken1,
          secondary: colors.purple.darken2,
          error: colors.red.darken1
          // Outras cores aqui
        }
      },
      light: {
        // Configuração do tema claro
        dark: false,
        colors: {
          primary: colors.green.accent3,
          secondary: colors.purple.lighten2,
          error: colors.red.accent2
          // Versões mais claras das cores
        }
      }
    }
  },
  components: {
    VCalendar,
    VDateInput
  },
  defaults: {
    VDataTableServer: {
      itemsPerPageOptions: [10, 25, 50, 100]
    },
    VDataTable: {
      itemsPerPageOptions: [10, 25, 50, 100]
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary'
    },
    VTextarea: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary'
    },
    VDateInput: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary'
    },
    VSelect: {
      variant: 'outlined',
      density: 'comfortable'
    },
    VCombobox: {
      variant: 'outlined',
      density: 'comfortable',
      autoSelectFirst: 'exact'
    },
    VAutocomplete: {
      variant: 'outlined',
      density: 'comfortable'
    },
    VSwitch: {
      density: 'comfortable'
    },
    VSheet: {
      rounded: true
    },
    VBreadcrumbs: {
      style: 'padding: 0'
    },
    VCheckbox: {
      density: 'comfortable',
      hideDetails: true,
      color: 'primary'
    },
    VAppBar: {
      color: 'blue-darken-4' // Ou qualquer outra cor definida no seu tema
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})


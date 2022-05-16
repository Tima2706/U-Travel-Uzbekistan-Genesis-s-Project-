import ru from './ru.json'
import en from  './en.json'
import uz from './uz.json'
import { createI18n } from 'vue-i18n'





export const i18n = createI18n({
    locale: "ru",
    fallbackLocale: 'en',
    fallbackRoot: 'uz',
    messages: {
        ru,
        en,
        uz
    },

})
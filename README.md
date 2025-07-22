## Установка

```bash
$ yarn install # Установить зависимости
$ yarn dev # Запуск локального сервера
```

## Описание

Мультиязычность реализована с помощью библиотеки [i18next](https://www.i18next.com/). Для её работы написаны серверная и клиентская утилиты (`localization.server.ts` и `localization.client.ts`), а также мидлвара `localization.middleware.ts`.

Сохранение настроек языка происходит путём установки cookie `language`. Язык определяется в корневом макете (серверный компонент), а затем передается в клиентские с помощью провайдера i18next. Язык влияет на аттрибуты `lang` и `rtl` (актуально для языков вроде арабского или иврита), которые также устанавливаются в корневом макете.

Для перевода товаров, а также адаптации их цен, подразумевается, что нужные данные заполняются через админку, поэтому их изменение реализовано через обращение к определенным ключам объекта.

```ts
{
  description: {
    en: ...
    ru: ...
    ar: ...
  },
  price: {
    usd: ...
    rub: ...
    aed: ...
  }
}
```

## Полезные ссылки

- [Документация i18next](https://www.i18next.com/overview/supported-frameworks)
- [Список поддерживаемых языков и фреймворков](https://www.i18next.com/overview/supported-frameworks)
- [Список плагинов и утилит](https://www.i18next.com/overview/plugins-and-utils)
- [Ссылка на презентацию](https://docs.google.com/presentation/d/11cmBW3sPbydTORDG79FZ94516S5HyG7E1zzrbdPiW8s/edit?usp=sharing)

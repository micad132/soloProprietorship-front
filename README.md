# Czesc frontendowa portalu do zarzadzania jednoosobowa dzialalnoscia gospodarcza

Projekt zostal stworzony za pomoca [Create React App](https://github.com/facebook/create-react-app).

## Podstawowe dostepne skrypty

### `yarn install`

Instalacja potrzebnych bibliotek/dependencji.

Start aplikacji:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Działanie aplikacji

Aplikacja napisana została za pomocą Reacta + TypeScript.

Do zarządzania ,,storem" wykorzystany został Redux Toolkit, a większość UI została napisana przy użyciu komponentów z biblioteki MUI.

Testy zostały wykonane za pomocą React Testing Library. 

Aplikacja zawiera obsługę JWT oraz opcjonalne 2FA(żeby z niego skorzystać należy przy rejestracji konta zaznaczyć odpowiedni checkbox) które wykorzystywane jest przy logowaniu i usuwaniu danych.

Oczywistym warunkiem pełnego korzystania z aplikacji jest uruchomienie częsci backendowej przed korzystaniem z części frontendowej.

Zalogowanym użytkownikiem jest przedsiębiorca/właściciel jednoosobowej działalności.


### `Rejestracja/logowanie`

Aby w pełni korzystać z aplikacji i jej funkcjonalności należy zarejestrować konto a następnie się na nie zalogować.
Operacje te są zabezpieczone przed atakami XSS oraz każde pole posiada odpowiedni format w jakim należy je uzupełnić (przykładowo email musi być w formacie emailu).
Przebieg tych operacji:

1. Kliknięcie ,,Zaloguj się" - Jeśli posiadamy konto należy się zalogować(w przypadku gdy podczas rejestracji zaznaczono opcję z wykorzystaniem 2FA do logowania potrzebny będzie również kod QR)
2. Kliknięcie ,,Zarejestruj się" - Jeśli nie posiadamy konta na samym dole logowania znajduje się przekierowanie na ekran rejestracji. Należy uzupełnić dane w odpowiedni sposób a konto zostanie dodane i aplikacja przeniesie nas do ekranu logowania.


### `Strona główna`

Niezalogowany użytkownik na każdej stronie z nawigacji widzi stosowną informację o braku zalogowania.

Jeśli użytkownik jest zalogowany strona główna zawiera podsumowanie ilości danych na portalu.

### `Klienci`

Znajduje się tu tabela z klientami danego przedsiębiorcy. Zalogowany użytkownik ma możliwość dodania nowych klientów oraz edycję lub usunięcie istniejących.

### `Produkty`

Znajduje się tu tabela z produktami danego przedsiębiorcy. Zalogowany użytkownik ma możliwość dodania nowych produktów oraz edycję lub usunięcie istniejących.

### `Usługi`

Znajduje się tu tabela z usługami danego przedsiębiorcy. Zalogowany użytkownik ma możliwość dodania nowych usług oraz edycję lub usunięcie istniejących.

### `Zamówienia`

Znajduje się tu tabela z zamówieniami danego przedsiębiorcy. Zalogowany użytkownik ma możliwość dodania nowych zamówień oraz edycję lub usunięcie istniejących. Podczas operacji dodawania lub edytowania istnieje możliwość wyboru dla którego klienta składamy zamówienie oraz na które usługi i produkty.

## Pozostałe skrypty

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
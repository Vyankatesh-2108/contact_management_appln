# Contact Management App

This is a contact management application built with ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query (TanstackQuery). It allows users to manage their contacts, view COVID-19 case statistics, and explore data on a map.

### Features

- Add, edit, and delete contacts
- Store contact data in Redux store and persist it in local storage
- Display a list of all added contacts
- View COVID-19 case fluctuations on a line graph
- Explore COVID-19 data by country on an interactive map

### Installation

Clone the repository:

```bash
git clone https://github.com/Vyankatesh-2108/contact-management-app.git
```

Navigate to the project directory:

```bash
cd contact-management-app
```

Install the dependencies:

```bash
npm install
```

Open the application in your browser at http://localhost:3000.

Use the navigation menu to switch between the Contacts, Charts, and Maps pages.
On the Contacts page, you can add new contacts using the provided form. The contact list will display all the added contacts, and you can edit or delete them as needed.
On the Charts page, you can view a line graph showing the fluctuations of COVID-19 cases over time. The data is fetched from the disease.sh API.
On the Maps page, you can explore COVID-19 data by country on an interactive map. Clicking on a country marker will display a popup with the country name, total active cases, recovered cases, and deaths.
API Endpoints
The application uses the following API endpoints to fetch COVID-19 data:

World wide data of cases: https://disease.sh/v3/covid-19/all
Country-specific data of cases: https://disease.sh/v3/covid-19/countries
Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all
Technologies Used
ReactJS
TypeScript
TailwindCSS
React Router v6
React Query (TanstackQuery)
Redux Toolkit
Recharts
React Leaflet
Project Structure

# HypermediaProject-TheDesigntists

*Hypermedia Applications course project at Politecnico di Milano*  
WebPage available at: https://hyp-nuxt-proj.herokuapp.com/

## General Overview
Design and Development of a website for tourimsm office.  
The website contains these pages:
- HomePage
- Posti
- Eventi
- Itinerari
- Servizi
- About
- Contatti

The application integrates the Server Side Rendering feature. Whenever it's needed to add new Events for example, it's not necessary to build and deploy the website again. Moreover using SSR we are able to better optimize the SEO.

The Design document is available here: [Design_Report.pdf](METTERE LINK)

**Technology:**  
The project has been developed using the Nuxt.js framework.  

**Other Technologies:**  
Server Technology: NodeJS  
DataBase Technology: PostgreSQL
ORM: Sequelize

## Components
- TheHeader.vue: Component used to render the header of all the pages
- TheFooter.vue: Component used to render the footer of all the pages
- TheBreadcrumb.vue: Component used to render the static breadcrumbs for all the pages
- CardElement.vue: Component used in various pages (All itineraries, All Events, All Points of interest) as a preview card.
- CarouselElement.vue: Component used to display a carousel of images used in different pages.
- CarouselLink.vue: Component used to display a carousel having a button that links the detail page of the current image.
- FilterButtons.vue: Component used as a filter (set of radio buttons) for a list of Elements (Events, Services)
- FilterDropdown.vue: Component used as a filter (button with dropdown) for a list of Elements (Events, Services)
- ItineraryDuration.vue: Component used to display the duration of an itinerary
- ItineraryStep.vue: Component used to display a step of an itineray. (it's composed by a title, an image and a short description of the current step)
- Map.vue: Component used to display a google map
- Service.vue: Component used as a card for each service (it includes a title, image, button to show opening hours)
- TeamMember.vue: Component used as a card for each team member (it includes the name, profile pic, list of Social.vue components)
- Social.vue: Component used as a social icon used in the profile of a team member
- SubmitForm.vue: Component used to render the contact form

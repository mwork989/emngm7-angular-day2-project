class notes

In Angular, the app-root element is typically used as the root component in your application, and there should be only one instance of it in your HTML file. If you're trying to have multiple instances of app-root or other root components, it might lead to unexpected behavior, as Angular expects a single root component to bootstrap the application.

Note: With angular zones based on project requiirements we can load multiple modules in HTML pages (once we gain more confidence in module creation then only approach) 

what is a module ?

A module in Angular is a mechanism to group related features, such as components, services, directives, and pipes, into a cohesive unit. It helps in organizing and managing the various parts of an application. 

what is a component?

A component in Angular is a building block that represents a part of the user interface and its behavior. Components are responsible for defining the structure of a view and handling the logic associated with that view. 


class angular cli commands

1. command to generate component

ng generate component <componentname>
ng g c <componentname>

e.g. ng generate component home6 ( no need to give extension)

you can also generate component in specific directories
ng generate component <directoryname>/<componentname>
ng g c <directoryname>/<componentname>

ng g c components/home9



Angular component selection process
-------------------------------------
tag based (default) e.g.  <component-selector></component-selector>

class based e.g. <div  class="component-selector"></div>

attribute based e.g. <div  component-selector></div>

having multiple selectors is a flexibility that angular framework provides and avoids any interference



There are various UI libraris in market 

Bootstrap:

Website: https://getbootstrap.com/
Description: Bootstrap is one of the most widely used responsive front-end frameworks. It includes a robust grid system, components, and styles for building responsive web pages. It also has a large and active community.

Tailwind CSS:
Website: https://tailwindcss.com/
Description: Tailwind CSS is a utility-first CSS framework that provides a set of low-level utility classes to build designs directly in your markup. It is highly customizable and encourages a flexible and modular approach to styling.

Materialize CSS:
Website: https://materializecss.com/
Description: Materialize is a modern responsive CSS framework based on Google's Material Design. It provides a set of components and styles that follow the Material Design guidelines.


Semantic UI:
Website: https://semantic-ui.com/
Description: Semantic UI is a user interface framework that uses human-friendly HTML to create responsive, clean, and consistent designs. It has a simple and intuitive syntax for defining UI elements.

Foundation:
Website: https://get.foundation/
Description: Foundation is a responsive front-end framework that includes a flexible grid system and a variety of UI components. It's designed to be easy to customize and adapt to different project needs.

Bulma:
Website: https://bulma.io/
Description: Bulma is a modern CSS framework based on Flexbox. It is modular and built with Sass, providing a simple and flexible structure for building responsive web interfaces.

Ant Design:
Website: https://ant.design/
Description: Ant Design is a popular design system and UI library for React applications. It provides a set of React components following the Ant Design specifications and is known for its clean and modern look.

UIKit:
Website: https://getuikit.com/
Description: UIKit is a lightweight and modular front-end framework that comes with a variety of components and styles. It's designed to be easy to use and extend.

Chakra UI:
Website: https://chakra-ui.com/
Description: Chakra UI is a popular component library for React applications. It provides a set of accessible and customizable components following design principles and best practices.


In angular course we will be doing with Bootstrap version4 only
we can import bootstrap in angular projects in mulitple ways


Boostrap (v4) - https://getbootstrap.com/docs/4.0/getting-started/introduction/ 
# Graph Report - .  (2026-06-03)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1088 nodes · 1621 edges · 181 communities (130 shown, 51 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 101 edges (avg confidence: 0.55)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e4d8ef01`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Order UI Components|Order UI Components]]
- [[_COMMUNITY_Product and Wishlist Views|Product and Wishlist Views]]
- [[_COMMUNITY_Cart and Dish APIs|Cart and Dish APIs]]
- [[_COMMUNITY_Minified jQuery Core|Minified jQuery Core]]
- [[_COMMUNITY_jQuery Library Utilities|jQuery Library Utilities]]
- [[_COMMUNITY_Database Models and Admin|Database Models and Admin]]
- [[_COMMUNITY_Frontend Dependencies|Frontend Dependencies]]
- [[_COMMUNITY_CoreAPI Client Library|CoreAPI Client Library]]
- [[_COMMUNITY_jQuery AJAX and CSS|jQuery AJAX and CSS]]
- [[_COMMUNITY_XRegExp Regex Utilities|XRegExp Regex Utilities]]
- [[_COMMUNITY_Django REST Serializers|Django REST Serializers]]
- [[_COMMUNITY_Minified XRegExp Library|Minified XRegExp Library]]
- [[_COMMUNITY_Navigation and Search UI|Navigation and Search UI]]
- [[_COMMUNITY_App TypeScript Configuration|App TypeScript Configuration]]
- [[_COMMUNITY_Sizzle Selector Engine|Sizzle Selector Engine]]
- [[_COMMUNITY_Project Structure Config|Project Structure Config]]
- [[_COMMUNITY_Node TypeScript Configuration|Node TypeScript Configuration]]
- [[_COMMUNITY_Highlight.js Syntax Highlighting|Highlight.js Syntax Highlighting]]
- [[_COMMUNITY_Minified Select2 Library|Minified Select2 Library]]
- [[_COMMUNITY_Django Admin Popups|Django Admin Popups]]
- [[_COMMUNITY_Payment Database Migrations|Payment Database Migrations]]
- [[_COMMUNITY_Django Admin Actions|Django Admin Actions]]
- [[_COMMUNITY_jQuery DOM Manipulation|jQuery DOM Manipulation]]
- [[_COMMUNITY_Prettify Code Formatter|Prettify Code Formatter]]
- [[_COMMUNITY_jQuery AJAX Effects|jQuery AJAX Effects]]
- [[_COMMUNITY_Bootstrap Minified Script|Bootstrap Minified Script]]
- [[_COMMUNITY_Global TypeScript Config|Global TypeScript Config]]
- [[_COMMUNITY_jQuery Layout Utilities|jQuery Layout Utilities]]
- [[_COMMUNITY_API Request Helpers|API Request Helpers]]
- [[_COMMUNITY_Django App Configurations|Django App Configurations]]
- [[_COMMUNITY_jQuery Animation Logic|jQuery Animation Logic]]
- [[_COMMUNITY_Customer Media Assets|Customer Media Assets]]
- [[_COMMUNITY_Author Profile Images|Author Profile Images]]
- [[_COMMUNITY_Vercel Deployment Config|Vercel Deployment Config]]
- [[_COMMUNITY_AJAX Form Submission|AJAX Form Submission]]
- [[_COMMUNITY_Theme Management Script|Theme Management Script]]
- [[_COMMUNITY_Admin Icon Assets|Admin Icon Assets]]
- [[_COMMUNITY_Django Management Script|Django Management Script]]
- [[_COMMUNITY_Server Interface Config|Server Interface Config]]
- [[_COMMUNITY_Frontend Entry Point|Frontend Entry Point]]
- [[_COMMUNITY_Glyphicon Icon Sprites|Glyphicon Icon Sprites]]
- [[_COMMUNITY_URL Slug Generator|URL Slug Generator]]
- [[_COMMUNITY_Cloudinary Storage Integration|Cloudinary Storage Integration]]
- [[_COMMUNITY_JWT Authentication Packages|JWT Authentication Packages]]
- [[_COMMUNITY_Customer Image Variants|Customer Image Variants]]
- [[_COMMUNITY_Initial Database Migration|Initial Database Migration]]
- [[_COMMUNITY_Build Shell Script|Build Shell Script]]
- [[_COMMUNITY_Initial Schema Migration|Initial Schema Migration]]
- [[_COMMUNITY_Django Project Settings|Django Project Settings]]
- [[_COMMUNITY_URL Routing Config|URL Routing Config]]
- [[_COMMUNITY_Vercel Rewrite Rules|Vercel Rewrite Rules]]
- [[_COMMUNITY_Customer Logo Assets|Customer Logo Assets]]
- [[_COMMUNITY_Customer Schema Update|Customer Schema Update]]
- [[_COMMUNITY_Customer Model Migrations|Customer Model Migrations]]
- [[_COMMUNITY_Payment Field Migrations|Payment Field Migrations]]
- [[_COMMUNITY_Payment Transaction Migrations|Payment Transaction Migrations]]
- [[_COMMUNITY_Payment Status Migrations|Payment Status Migrations]]
- [[_COMMUNITY_Dish and Payment Updates|Dish and Payment Updates]]
- [[_COMMUNITY_Customer Image Migration|Customer Image Migration]]
- [[_COMMUNITY_Dependency Management Helpers|Dependency Management Helpers]]
- [[_COMMUNITY_Selection Utility Functions|Selection Utility Functions]]
- [[_COMMUNITY_Event Delta Handler|Event Delta Handler]]
- [[_COMMUNITY_Data Normalization Helpers|Data Normalization Helpers]]
- [[_COMMUNITY_Prefix Splitting Utilities|Prefix Splitting Utilities]]
- [[_COMMUNITY_FontAwesome Webfont File|FontAwesome Webfont File]]
- [[_COMMUNITY_Frontend Documentation|Frontend Documentation]]
- [[_COMMUNITY_jQuery License Info|jQuery License Info]]
- [[_COMMUNITY_Select2 License Info|Select2 License Info]]
- [[_COMMUNITY_Customer Logo Variant|Customer Logo Variant]]
- [[_COMMUNITY_Customer Logo Asset|Customer Logo Asset]]
- [[_COMMUNITY_User Profile Image|User Profile Image]]
- [[_COMMUNITY_ASGI Server Library|ASGI Server Library]]
- [[_COMMUNITY_SSL Certificate Library|SSL Certificate Library]]
- [[_COMMUNITY_Character Encoding Library|Character Encoding Library]]
- [[_COMMUNITY_CORS Headers Middleware|CORS Headers Middleware]]
- [[_COMMUNITY_Django Query Filtering|Django Query Filtering]]
- [[_COMMUNITY_IDNA Domain Library|IDNA Domain Library]]
- [[_COMMUNITY_Pillow Image Library|Pillow Image Library]]
- [[_COMMUNITY_PostgreSQL Database Adapter|PostgreSQL Database Adapter]]
- [[_COMMUNITY_Environment Variable Loader|Environment Variable Loader]]
- [[_COMMUNITY_Timezone Database Library|Timezone Database Library]]
- [[_COMMUNITY_HTTP Requests Library|HTTP Requests Library]]
- [[_COMMUNITY_Python Compatibility Library|Python Compatibility Library]]
- [[_COMMUNITY_SQL Parsing Library|SQL Parsing Library]]
- [[_COMMUNITY_IANA Timezone Data|IANA Timezone Data]]
- [[_COMMUNITY_HTTP Client Library|HTTP Client Library]]
- [[_COMMUNITY_Static File Middleware|Static File Middleware]]
- [[_COMMUNITY_Grid Layout Image|Grid Layout Image]]
- [[_COMMUNITY_XRegExp License Info|XRegExp License Info]]

## God Nodes (most connected - your core abstractions)
1. `Customer` - 20 edges
2. `compilerOptions` - 20 edges
3. `Button` - 16 edges
4. `compilerOptions` - 16 edges
5. `Order` - 15 edges
6. `OrderedItem` - 15 edges
7. `Payment` - 14 edges
8. `cn()` - 14 edges
9. `Category` - 13 edges
10. `Dish` - 13 edges

## Surprising Connections (you probably didn't know these)
- `Calendar Icon SVG` --conceptually_related_to--> `Font Awesome`  [INFERRED]
  backend/staticfiles/admin/img/icon-calendar.svg → backend/staticfiles/admin/img/README.txt
- `Meta` --uses--> `Customer`  [INFERRED]
  backend/Store/models.py → backend/Accounts/models.py
- `I()` --calls--> `h()`  [INFERRED]
  backend/staticfiles/admin/js/vendor/jquery/jquery.min.js → backend/staticfiles/rest_framework/docs/js/highlight.pack.js
- `DropdownMenuShortcut()` --calls--> `cn()`  [EXTRACTED]
  frontend/src/components/ui/dropdown-menu.tsx → frontend/src/lib/utils.ts
- `Glyphicons Halflings White Sprite` --semantically_similar_to--> `Glyphicons Halflings Sprite`  [INFERRED] [semantically similar]
  backend/staticfiles/rest_framework/img/glyphicons-halflings-white.png → backend/staticfiles/rest_framework/img/glyphicons-halflings.png

## Import Cycles
- None detected.

## Communities (181 total, 51 thin omitted)

### Community 0 - "Order UI Components"
Cohesion: 0.08
Nodes (38): getDishes(), PlanToOrderButtonProps, PaymentButtonProps, CartButtonProps, OrderedItem, OrderProps, Payment, Layout2() (+30 more)

### Community 1 - "Product and Wishlist Views"
Cohesion: 0.08
Nodes (25): getReviews(), APIView, WishlistButtonProps, ProductCardProps, ProductDetailsProps, WishlistCardProps, useFetchDishes(), ChangePassword() (+17 more)

### Community 2 - "Cart and Dish APIs"
Cohesion: 0.07
Nodes (31): api, addToCartApi(), deleteCartApi(), getCart(), getCategories(), postReview(), createOrder(), deleteOrder() (+23 more)

### Community 3 - "Minified jQuery Core"
Cohesion: 0.07
Nodes (28): h(), Ae(), B(), Be(), c(), $e(), ee(), F() (+20 more)

### Community 4 - "jQuery Library Utilities"
Cohesion: 0.07
Nodes (27): Ae(), B(), Be(), c(), $e(), ee(), F(), fe() (+19 more)

### Community 6 - "Database Models and Admin"
Cohesion: 0.12
Nodes (32): AbstractUser, CustomerAdmin, Customer, CustomerSerializer, CustomerTokenObtainSerializer, Meta, Custom Token Serializer to authenticate Customers using email OR username, CustomerProfileView (+24 more)

### Community 7 - "Frontend Dependencies"
Cohesion: 0.04
Nodes (47): dependencies, axios, class-variance-authority, clsx, js-cookie, jwt-decode, lucide-react, motion (+39 more)

### Community 8 - "CoreAPI Client Library"
Cohesion: 0.07
Nodes (35): BasicAuthentication(), Body(), bufferClone(), _classCallCheck(), Client(), consumed(), CoreJSONCodec(), decode() (+27 more)

### Community 9 - "jQuery AJAX and CSS"
Cohesion: 0.05
Nodes (6): computeStyleTests(), dataAttr(), finalPropName(), getData(), roundPixelMeasures(), vendorPropName()

### Community 10 - "XRegExp Regex Utilities"
Cohesion: 0.08
Nodes (24): _arrayLikeToArray(), augment(), buildAstral(), cacheAstral(), cacheInvertedBmp(), charCode(), clipDuplicates(), copyRegex() (+16 more)

### Community 11 - "Django REST Serializers"
Cohesion: 0.08
Nodes (17): PageNumberPagination, CartSerializers, CategorySerializers, DishSerializers, Meta, OrderedItemSerializers, OrderSerializers, PaymentSerializers (+9 more)

### Community 12 - "Minified XRegExp Library"
Cohesion: 0.10
Nodes (12): _arrayLikeToArray(), augment(), cacheInvertedBmp(), charCode(), clipDuplicates(), copyRegex(), _createForOfIteratorHelper(), isType() (+4 more)

### Community 13 - "Navigation and Search UI"
Cohesion: 0.10
Nodes (15): useFetchCategory(), DesktopNavProps, NavbarProps, SearchProps, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel (+7 more)

### Community 14 - "App TypeScript Configuration"
Cohesion: 0.09
Nodes (22): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+14 more)

### Community 15 - "Sizzle Selector Engine"
Cohesion: 0.17
Nodes (19): addCombinator(), assert(), compile(), condense(), createPositionalPseudo(), elementMatcher(), find(), markFunction() (+11 more)

### Community 16 - "Project Structure Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 17 - "Node TypeScript Configuration"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+9 more)

### Community 18 - "Highlight.js Syntax Highlighting"
Cohesion: 0.24
Nodes (16): a(), c(), d(), f(), g(), i(), l(), m() (+8 more)

### Community 19 - "Minified Select2 Library"
Cohesion: 0.15
Nodes (7): b(), D(), e(), i(), S(), u(), y()

### Community 20 - "Django Admin Popups"
Cohesion: 0.24
Nodes (10): addPopupIndex(), dismissAddRelatedObjectPopup(), dismissChangeRelatedObjectPopup(), dismissDeleteRelatedObjectPopup(), dismissRelatedLookupPopup(), removePopupIndex(), showAdminPopup(), showRelatedObjectLookupPopup() (+2 more)

### Community 21 - "Payment Database Migrations"
Cohesion: 0.17
Nodes (11): Migration, Migration, Migration, Migration, Migration, Migration, Migration, Migration (+3 more)

### Community 22 - "Django Admin Actions"
Cohesion: 0.38
Nodes (8): checker(), clearAcross(), hide(), reset(), show(), showClear(), showQuestion(), updateCounter()

### Community 23 - "jQuery DOM Manipulation"
Cohesion: 0.24
Nodes (10): buildFragment(), buildParams(), cloneCopyEvent(), DOMEval(), domManip(), getAll(), isArrayLike(), remove() (+2 more)

### Community 24 - "Prettify Code Formatter"
Cohesion: 0.31
Nodes (7): C(), D(), E(), L(), M(), u(), x()

### Community 25 - "jQuery AJAX Effects"
Cohesion: 0.25
Nodes (8): adoptValue(), ajaxConvert(), ajaxHandleResponses(), createTween(), defaultPrefilter(), done(), getDefaultDisplay(), showHide()

### Community 26 - "Bootstrap Minified Script"
Cohesion: 0.54
Nodes (7): e(), i(), l(), n(), r(), s(), u()

### Community 27 - "Global TypeScript Config"
Cohesion: 0.29
Nodes (6): compilerOptions, baseUrl, paths, files, @/*, references

### Community 28 - "jQuery Layout Utilities"
Cohesion: 0.29
Nodes (7): boxModelAdjustment(), createButtonPseudo(), createInputPseudo(), curCSS(), getWidthOrHeight(), manipulationTarget(), nodeName()

### Community 30 - "Django App Configurations"
Cohesion: 0.40
Nodes (3): AccountsConfig, AppConfig, StoreConfig

### Community 31 - "jQuery Animation Logic"
Cohesion: 0.40
Nodes (5): Animation(), camelCase(), createFxNow(), propFilter(), Tween()

### Community 33 - "Customer Media Assets"
Cohesion: 0.67
Nodes (4): Customer Media Image 5177922, Customer Media Directory, Customer Download Image 2, TikTok/Trill Screenshot 2025-02-19

### Community 35 - "Vercel Deployment Config"
Cohesion: 0.50
Nodes (3): builds, routes, version

### Community 38 - "Theme Management Script"
Cohesion: 0.83
Nodes (3): cycleTheme(), initTheme(), setTheme()

### Community 39 - "Admin Icon Assets"
Cohesion: 0.67
Nodes (3): Admin Icons README, Font Awesome, Calendar Icon SVG

### Community 42 - "Frontend Entry Point"
Cohesion: 0.67
Nodes (3): Frontend Index HTML, Main Entry Point, GitCook Logo

### Community 43 - "Glyphicon Icon Sprites"
Cohesion: 0.67
Nodes (3): Glyphicons Halflings Sprite, Glyphicons Halflings Regular, Glyphicons Halflings White Sprite

### Community 47 - "Cloudinary Storage Integration"
Cohesion: 0.67
Nodes (3): cloudinary, Django, django-cloudinary-storage

### Community 48 - "JWT Authentication Packages"
Cohesion: 0.67
Nodes (3): djangorestframework, djangorestframework-simplejwt, PyJWT

## Knowledge Gaps
- **201 isolated node(s):** `Migration`, `Migration`, `Migration`, `Migration`, `Meta` (+196 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **51 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `matcher()` connect `Sizzle Selector Engine` to `Select2 Adapter Logic`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `Customer` connect `Database Models and Admin` to `Product and Wishlist Views`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `h()` connect `Minified jQuery Core` to `Highlight.js Syntax Highlighting`, `jQuery Library Utilities`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Are the 15 inferred relationships involving `Customer` (e.g. with `CustomerAdmin` and `.create()`) actually correct?**
  _`Customer` has 15 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Migration`, `Migration`, `Migration` to the rest of the system?**
  _207 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Order UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.07553143374038897 - nodes in this community are weakly interconnected._
- **Should `Product and Wishlist Views` be split into smaller, more focused modules?**
  _Cohesion score 0.07532467532467532 - nodes in this community are weakly interconnected._
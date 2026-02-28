# Portfolio Documentation

## Table of Contents
1. [CSS Styles](#css-styles)
2. [JavaScript Functions](#javascript-functions)
3. [Features & Functionalities](#features--functionalities)

---

## CSS Styles

### Global & Layout

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `html, body` | Base styling | Dark background (#2b2b2b), 100% height, sans-serif font |
| `html::-webkit-scrollbar` | Scrollbar width | 12px width |
| `html::-webkit-scrollbar-track` | Scrollbar track | Dark background |
| `html::-webkit-scrollbar-thumb` | Scrollbar thumb | Semi-transparent white with hover effect |
| `header` | Fixed header | Position: fixed, height: 4em, backdrop blur, z-index: 1 |
| `footer` | Page footer | Black background, flexbox center, height: 7em |
| `.base-bg` | Main background container | Linear gradient (top), min-height: 100vh, flex center |
| `.base-container` | Content wrapper | Width: 85%, max-width: 1100px, glassmorphic design, rounded corners |

### Navigation & Sidebar

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `.sidebar` | Navigation menu | Fixed position, width: 300px, slides from left, z-index: 1002 |
| `.sidebar-btn` | Navigation buttons | Full width, padding, border-radius, hover effect (white bg) |
| `.close-btn` | Close sidebar button | Position: absolute, transparent bg, font-size: 2rem |
| `.open-btn` | Open sidebar button | Icon button, transparent, positioned fixed |

### Profile & Identity

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `.profile-img` | Profile image | Position: absolute (top-right), circular (border-radius: 50%), 125px |
| `.mini-profile` | Header profile image | Position: absolute (top-right), 38px, slide animation, z-index: 1500 |
| `.mini-profile.visible` | Active mini profile | Slide-down animation, pointer-events: auto |
| `.identity` | User identity section | Color: #f0f0f0, max-width: 60% |
| `.name` | Name heading | Font-size: 2.5rem, font-weight: 600, hover glow effect |
| `.role` | User role text | Font-size: 1rem, color: #cccccc |
| `.minidesc` | Small description | Font-size: 0.9rem, color: #cccccc |

### Social & Buttons

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `.social-contents` | Social button container | Position: absolute (top-right), flex row, gap: 0.5rem |
| `.social-btn` | Social media buttons | 0.5rem padding, rounded, semi-transparent bg, hover effect |
| `.social-btn-modal` | Modal social buttons | Similar to social-btn, used in modals |

### Information Boxes

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `.info-box` | Info section | Padding: 1.5rem, dark background, border-radius: 16px, max-width: 65% |
| `.info-text-box` | Text info section | Similar to info-box, max-width: 100%, hover glow |
| `.info-img` | Image container | Overflow: hidden, border-radius: 13px, border: 1px solid |
| `.info-img-tiled` | Grid of images | CSS Grid, auto-fit columns, 150px min |
| `.info-img-column` | Vertical image layout | Flex column, full width |
| `.info-img-row` | Horizontal image layout | Flex row, overflow-x: auto |
| `.info-img-left` | Left-aligned image | Flex row, 40% image width, gap: 1.5rem |
| `.info-img-headline` | Main image | Width: 100%, max-height: 400px, object-fit: cover |
| `.info-img-sub` | Subheading image | Width: 100%, max-height: 250px, object-fit: cover |
| `.info-inner-box` | Nested info box | Grid 2 columns, padding: 1.5rem |

### Modals

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `.image-modal` | Profile image modal | Position: fixed, full screen, dark backdrop, blur filter, z-index: 2000 |
| `.modal-img` | Modal image | Position: absolute center, circular, border: 2px solid, box-shadow |
| `.modal-close` | Modal close button | Position: absolute (top-right), 30px, semi-transparent bg |
| `.modal-buttons` | Modal button container | Position: absolute (bottom), flex row, gap: 1rem |
| `.reach-out-modal` | Contact form modal | Position: fixed, full screen, dark backdrop, z-index: 2000 |
| `.reach-out-modal-content` | Form container | Glassmorphic design, max-width: 500px, padding: 2.5rem |

### Toast Messages

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `.error-toast` | Error notification | Position: fixed (bottom-right), red background, slide animation |
| `.primary-toast` | Success notification | Position: fixed (bottom-right), green background, slide animation |
| `.info-toast` | Info notification | Position: fixed (bottom-right), gray background, slide animation |
| `.error-toast.show` | Toast showing | Opacity: 1, transform: translateX(0) |
| `.error-toast.hide` | Toast hiding | Opacity: 0, transform: translateX(120%) |

### Projects Section

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `.projects-grid` | Projects container | CSS Grid, auto-fill columns, minmax(300px, 1fr), gap: 1.5rem |
| `.project-card` | Individual project | Background: semi-transparent, border: 1px, padding: 1.5rem, hover lift |
| `.project-header` | Card header | Flex space-between, gap: 1rem |
| `.project-title` | Project name link | Font-size: 1.1rem, font-weight: 600, hover color change |
| `.project-language` | Language badge | Background: gray, padding: 0.25rem 0.75rem, border-radius: 12px |
| `.project-description` | Project description | Color: #cccccc, font-size: 0.95rem, line-height: 1.4 |
| `.project-footer` | Card footer | Flex, padding-top: 1rem, border-top: 1px solid |
| `.project-stat` | Project stats | Flex row, gap: 0.4rem, white-space: nowrap |
| `.project-updated` | Last updated date | Font-size: 0.8rem, margin-left: auto |

### Contacts Section

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `.contacts-grid` | Contacts container | CSS Grid, auto-fit columns, minmax(280px, 1fr), gap: 2rem |
| `.contact-card` | Individual contact | Position: relative, padding: 2rem, circular gradient on hover |
| `.contact-card::before` | Hover gradient | Radial gradient, opacity 0 (0.15 on hover) |
| `.contact-content` | Card content | Flex column center, position: relative, z-index: 1 |
| `.contact-icon` | Contact icon | Font-size: 3rem, color: #f0f0f0, hover color glow |
| `.contact-platform` | Platform name | Font-size: 1.3rem, font-weight: 600, color: #f0f0f0 |
| `.contact-name` | Contact name/handle | Font-size: 0.9rem, color: #cccccc, word-break: break-word |
| `.contact-btn` | Connect button | Semi-transparent bg, padding: 0.75rem 1.5rem, hover theme color |

### Form Elements

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `.reach-out-form` | Contact form | Flex column, gap: 1.5rem |
| `.form-group` | Form field | Flex column, gap: 0.5rem |
| `.form-group label` | Input label | Color: #f0f0f0, font-size: 0.95rem |
| `.immutable-input` | Read-only input | Semi-transparent bg, padding: 0.75rem 1rem, cursor: not-allowed |
| `.immutable-input:focus` | Input focus state | outline: none, light backdrop, box-shadow |
| `.reach-out-submit` | Submit button | Semi-transparent, padding: 0.75rem 1rem, margin-top: 1rem |

### Contribution Graph

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `.contribution-pane` | Contribution section | Margin-top: 3rem, padding-top: 2rem, border-top |
| `.contribution-graph` | Graph container | Width: 50%, margin: auto, overflow-x: auto, padding: 1.5rem |
| `.contribution-table` | Years grid | Display: inline-flex, gap: 0.3rem, flex-direction: row-reverse |
| `.contribution-week` | Week column | Flex column, gap: 0.3rem |
| `.contribution-day` | Individual tile | 12px × 12px, border-radius: 3px, hover scale(1.2) |
| `.contribution-level-0` | No contribution | rgba(255,255,255,0.05) |
| `.contribution-level-1` | 1-25% contribution | rgba(76,175,80,0.3) |
| `.contribution-level-2` | 26-50% contribution | rgba(76,175,80,0.5) |
| `.contribution-level-3` | 51-75% contribution | rgba(76,175,80,0.7) |
| `.contribution-level-4` | 76-100% contribution | rgba(76,175,80,1) |
| `.contribution-legend` | Legend container | Flex row, justify: flex-end, gap: 0.8rem |
| `.legend-square` | Legend square | 12px × 12px, border-radius: 3px |

### Hero Page

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `.hero-content` | Hero container | Flex column center, text-align: center, gap: 2rem, max-width: 800px |
| `.hero-title` | Main title | Font-size: 3.5rem, font-weight: 700, text-shadow, fadeInUp animation |
| `.hero-subtitle` | Subtitle | Font-size: 1.3rem, color: #cccccc, staggered animation (0.2s delay) |
| `.hero-buttons` | Button container | Flex row, gap: 1rem, flex-wrap, staggered animation (0.4s delay) |
| `.hero-btn` | Base button | Padding: 1rem 2rem, border-radius: 8px, font-weight: 600 |
| `.hero-btn-primary` | Primary button | Blue gradient, box-shadow, hover lift & color change |
| `.hero-btn-secondary` | Secondary button | Transparent with border, hover light bg & glow |

### Animations & Utilities

| Class/ID | Purpose | Key Properties |
|----------|---------|-----------------|
| `@keyframes slideDown` | Mini profile appear | translateY(-100px to -50%), opacity 0 to 1 |
| `@keyframes slideUp` | Mini profile disappear | translateY(-50% to -100px), opacity 1 to 0 |
| `@keyframes fadeInUp` | Content fade in | translateY(30px to 0), opacity 0 to 1 |
| `@keyframes slideIn` | Modal appear | translateY(-50px to 0), opacity 0 to 1 |
| `.base-container.shifted` | Sidebar open state | transform: translateX(320px) |
| `.main-surface.out-of-view` | Hidden state | opacity: 0 |

---

## JavaScript Functions

### Toast Notification Functions

#### `showErrorToast(message = 'This section is not available yet.')`
- **File**: main.js
- **Purpose**: Display error notification toast
- **Parameters**: `message` (string) - Toast message text
- **Behavior**: 
  - Prevents stacking multiple toasts
  - Shows for 2 seconds with slide animation
  - Red background (#B4282850)
  - Bottom-right position

#### `showPrimaryToast(message = 'Success!')`
- **File**: main.js
- **Purpose**: Display success notification toast
- **Parameters**: `message` (string) - Toast message text
- **Behavior**: 
  - Green background (#28B42850)
  - 2-second display duration
  - Slide-in/out animation

#### `showInfoToast(message = 'Information')`
- **File**: main.js
- **Purpose**: Display info notification toast
- **Parameters**: `message` (string) - Toast message text
- **Behavior**: 
  - Gray background (#64646450)
  - 2-second display duration
  - Slide animation

### Sidebar & Navigation Functions

#### `openSidebar()`
- **File**: main.js
- **Purpose**: Open navigation sidebar
- **Behavior**:
  - Slides sidebar in from left (left: 2em)
  - Shifts containers and footer
  - Disables page scrolling
  - Hides open button

#### `closeSidebar()`
- **File**: main.js
- **Purpose**: Close navigation sidebar
- **Behavior**:
  - Slides sidebar out (left: -300px)
  - Resets shifted containers
  - Re-enables page scrolling
  - Shows open button

#### `navigateTo(destination)`
- **File**: main.js
- **Purpose**: Navigate to page with sidebar close animation
- **Parameters**: `destination` (string) - URL destination
- **Behavior**:
  - Shows error toast if destination is empty or '#'
  - Closes sidebar first
  - Waits 300ms before navigation
  - Used for all navigation links

#### `initializeNavigation()`
- **File**: navi.js
- **Purpose**: Dynamically populate sidebars with page buttons
- **Behavior**:
  - Detects current page (home or sub-page)
  - Shows Home button only on sub-pages
  - Creates buttons for all pages in config
  - Sets up navigation routes dynamically

#### `getCurrentPageName()`
- **File**: navi.js
- **Purpose**: Detect current page location
- **Returns**: 'home', page directory name, or null
- **Logic**: Uses pathname regex to identify location

#### `getBasePath()`
- **File**: navi.js
- **Purpose**: Calculate relative paths based on location
- **Returns**: '../../' for sub-pages, '' for home

#### `capitalizeFirstLetter(string)`
- **File**: navi.js
- **Purpose**: Capitalize first character of string
- **Returns**: Capitalized string (e.g., 'projects' → 'Projects')

### Modal Functions

#### `showImageModal()`
- **File**: main.js
- **Purpose**: Open profile image modal
- **Behavior**:
  - Sets modal visibility & opacity
  - Adds slide-down class to mini profile
  - Scales image from 0.8 to 1 with 10ms delay

#### `closeImageModal()`
- **File**: main.js
- **Purpose**: Close profile image modal
- **Behavior**:
  - Fades out modal (opacity: 0)
  - Scales image back to 0.8
  - Removes slide-down class
  - Hides after 300ms delay

#### `openReachOutModal()`
- **File**: contacts.js
- **Purpose**: Open contact form modal
- **Behavior**:
  - Adds 'show' class to modal
  - Sets opacity: 1 and visibility: visible

#### `closeReachOutModal()`
- **File**: contacts.js
- **Purpose**: Close contact form modal
- **Behavior**:
  - Removes 'show' class
  - Sets opacity: 0 and visibility: hidden

### Image Utilities

#### `preloadImages()`
- **File**: main.js
- **Purpose**: Preload all page images for faster loading
- **Behavior**:
  - Collects all img src attributes
  - Collects background images from style attributes
  - Creates Image objects to preload
  - Logs count of preloaded images

#### `getPlaceholderImage(width = 300, height = 300, seed = '')`
- **File**: main.js
- **Purpose**: Get placeholder image URL from Picsum.photos API
- **Parameters**: 
  - `width`: Image width in pixels
  - `height`: Image height in pixels
  - `seed`: Optional seed or "id:XXX" format for specific image
- **Returns**: Picsum.photos URL string

#### `getPlaceholderImageGrayscale(width = 300, height = 300, seed = '')`
- **File**: main.js
- **Purpose**: Get grayscale placeholder image
- **Parameters**: Same as getPlaceholderImage
- **Returns**: Picsum.photos grayscale URL

#### `getPlaceholderImageBlurred(width = 300, height = 300, blur = 5, seed = '')`
- **File**: main.js
- **Purpose**: Get blurred placeholder image
- **Parameters**: 
  - `width`, `height`, `seed`: Same as getPlaceholderImage
  - `blur`: Blur amount (1-10)
- **Returns**: Picsum.photos blurred URL

#### `loadPlaceholderImages()`
- **File**: main.js
- **Purpose**: Auto-load placeholder images from data-placeholder attributes
- **Attribute Format**: `data-placeholder="width,height[,seed][,style]"`
- **Styles**: 'normal', 'grayscale', 'blur'
- **Example**: `<img data-placeholder="300,300,id:42,grayscale">`

### Contact Functions

#### `fetchContactProfiles()`
- **File**: contacts.js
- **Purpose**: Fetch GitHub profile data and create contact cards
- **Behavior**:
  - Clears container HTML
  - Loops through CONTACTS array
  - Fetches GitHub API if ID is 'github'
  - Creates contact card for each contact

#### `createContactCard(contact, displayName)`
- **File**: contacts.js
- **Purpose**: Create individual contact card HTML
- **Parameters**: 
  - `contact`: Contact object from CONTACTS array
  - `displayName`: Display name string
- **Behavior**:
  - Creates card element with theme color
  - Sets up button to open URL or modal
  - Appends to contacts-container

#### `onImmutableInputClick(event)`
- **File**: contacts.js
- **Purpose**: Handle clicks on read-only form inputs
- **Behavior**: Shows "Under construction" error toast

### Other Functions

#### `handleOpenBtnPosition()`
- **File**: main.js
- **Purpose**: Manage open button positioning on resize
- **Behavior**: Ensures button stays fixed on all screen sizes

#### `restoreMain()`
- **File**: main.js
- **Purpose**: Scroll main surface into view
- **Behavior**: Smooth scroll to element with class 'main-surface'

---

## Features & Functionalities

### 🎨 Design System

#### Dark Theme
- Background: #2b2b2b (main), #000000 (footer)
- Text: #f0f0f0 (primary), #cccccc (secondary), #999999 (tertiary)
- Glassmorphic elements with backdrop blur

#### Responsive Design
- Mobile: <= 768px (stacked layout, full-width elements)
- Desktop: > 768px (side-by-side layouts, 85% max-width)
- Breakpoint-aware CSS media queries throughout

### 🧭 Navigation System

#### Dynamic Page Discovery
- Automatically detects pages in `/pages/` directory
- Displays page directory names as button labels (capitalized)
- Each page has its own sidebar with intelligent button visibility

#### Smart Navigation Logic
- Home page shows all available pages
- Sub-pages show "Home" + sibling pages (current page hidden)
- Under construction pages show error toast instead of navigating
- Page routes calculated dynamically based on location

### 📋 Page Configuration

**File**: `js/navi.js`

```javascript
const pages = [
    { dir: 'projects', isUnderConstruction: false },
    { dir: 'contacts', isUnderConstruction: false },
    { dir: 'testpage', isUnderConstruction: true }
];
```

### 📱 Sidebar Functionality

- **Manual trigger**: hamburger menu button (`.open-btn`)
- **Auto-close**: clicking navigation link or close button
- **Scroll lock**: Disables page scrolling when open
- **Animation**: 300ms transition for smooth open/close
- **Z-index**: 1002 (above header, below modals)

### 🖼️ Profile Image System

#### Static Profile Image
- Position: top-right of first base-container
- Size: 125px circular
- Clicks open modal

#### Mini Profile
- Position: top-right header
- Size: 38px circular
- Visibility: Hidden by default
- Shows when main profile scrolls out of view
- Slide animation with 200px translate

#### Profile Image Modal
- Full screen overlay with dark backdrop (80% opacity)
- Centered image with scale animation (0.8 → 1.0)
- Three social buttons (Discord, Email, GitHub)
- Keyboard-friendly (close button available)

### 💬 Toast Notification System

#### Types
1. **Error Toast** - Red background, error messages
2. **Primary Toast** - Green background, success messages
3. **Info Toast** - Gray background, information messages

#### Behavior
- Position: bottom-right corner
- Auto-dismiss: 2 seconds
- Animation: slide in from right, fade on exit
- Stack prevention: Only 1 toast at a time
- Z-index: 3000 (above all content)

### 🎓 Contact System

#### Contact Grid
- Responsive 1-4 column layout
- Automatic column sizing (minmax 280px)
- Contact cards with theme colors

#### Contact Types
1. **Discord** - Theme: #5865F2 (Purple)
2. **GitHub** - Theme: #ffffff (White), fetches real profile name
3. **Facebook** - Theme: #1877F2 (Blue)
4. **Email** - Theme: #FF6B6B (Red)
5. **Reach Out** - Theme: #4A90E2 (Blue), opens form modal

#### Reach Out Modal
- Form with three immutable fields:
  - Your Name (text input)
  - Your Email (email input)
  - Message (textarea)
- All inputs show "Under construction" toast on click
- Styled with glassmorphic design
- Smooth slide-in animation

### 📊 Projects Section

- **Layout**: Auto-fill grid with 300px minimum column width
- **Cards**: 
  - Semi-transparent background with border
  - Project title, description, language badge
  - Star count, repository size, last updated date
  - Hover lift animation with shadow increase
  - Links to GitHub repository

### 📈 Contribution Graph

#### Data Source
- GitHub GraphQL API (primary)
- GitHub REST API fallback (public events)
- Uses authenticated GitHub token if available

#### Display
- 52-week grid (1 year of contributions)
- Row-reversed layout (recent on right)
- 5 contribution levels (colors: transparent → bright green)
- Hover effect: Scale 1.2x with glow

#### Legend
- Shows contribution scale from "Less" to "More"
- 5 color squares representing each level
- Right-aligned display

#### Scrolling
- Horizontal scroll only (overflow-x: auto, overflow-y: hidden)
- Custom scrollbar styling
- Centered container (50% width, margin: auto)

### 🎬 Animations

#### Fade-in Animations
- **slideDown/slideUp**: Profile image in header (200px translate)
- **fadeInUp**: Hero page content (staggered timing)
- **slideIn**: Modal appearance

#### Interactive Animations
- Hover scale on contribution tiles (1.2x)
- Button lift on hover (-2px translate)
- Color transitions (0.3s ease)
- Shadow transitions on cards

### 🖼️ Image System

#### Placeholder Service
- Uses Picsum.photos API for demo images
- Supports grayscale and blur filters
- Seeded images for consistency
- Specific image selection with ID format

#### Auto-Loading
- Elements with `data-placeholder` attribute auto-load
- Preloader runs on DOM ready
- Collects both img src and background-image URLs

### 🎨 Form Elements

#### Immutable Inputs
- Read-only styling with reduced opacity
- Disabled cursor (not-allowed)
- Semi-transparent background
- Focus state with subtle glow
- Click shows error toast

#### Reach Out Form
- Part of modal system
- Currently placeholder (no backend)
- Styled to match portfolio theme

### 📱 Mobile Optimization

- Stacked layout for navigation
- Full-width buttons and cards
- Reduced font sizes on mobile
- Touch-friendly button sizes (min 44px height)
- Hero page adjusts title size (3.5rem → 2rem)

### ⌨️ Accessibility Features

- All buttons are keyboard navigable (`onclick` handlers)
- Modals have close buttons
- Toasts auto-dismiss
- Icons use Bootstrap Icons (accessible)
- Semantic HTML structure
- Clear visual hierarchy with color

---

## Configuration Files

### Pages Configuration (`js/navi.js`)

```javascript
const pages = [
    { 
        dir: 'projects',           // Directory name in /pages/
        isUnderConstruction: false  // Show as clickable or disabled
    },
    // Add more pages here automatically
];
```

### Contacts Configuration (`js/contacts.js`)

```javascript
const CONTACTS = [
    {
        id: 'discord',
        name: 'Discord',
        icon: 'bi-discord',
        theme: '#5865F2',
        url: 'https://...',
        // ... more properties
    },
    // Add more contacts here
];
```

---

## Usage Examples

### Add a New Page
1. Create `/pages/newpage/index.html`
2. Add to `pages` array in `navi.js`:
```javascript
{ dir: 'newpage', isUnderConstruction: false }
```
3. Navigation will auto-generate sidebar buttons

### Show Toast Notification
```javascript
showErrorToast('Custom error message');
showPrimaryToast('Success!');
showInfoToast('Info message');
```

### Load Placeholder Image
```html
<img data-placeholder="400,300,id:42,grayscale">
<!-- Result: Grayscale image of 400x300 from Picsum -->
```

### Add Reach Out Contact
```javascript
// Edit CONTACTS array in contacts.js
{ 
    id: 'reach-out-alt',
    name: 'Contact Us',
    icon: 'bi-envelope-fill',
    theme: '#FF6B6B',
    isModal: true
}
```

---

## Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+), CSS3
- **APIs**: GitHub GraphQL API, Picsum.photos
- **Icons**: Bootstrap Icons v1.10.0
- **CSS Framework**: Custom glassmorphic design
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

---

*Documentation last updated: February 28, 2026*

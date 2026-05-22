# PropoAI - AI-Powered Proposal Management System

## Frontend Documentation

### Project Overview
PropoAI is a comprehensive proposal management platform that helps teams create, manage, and track business proposals using AI-powered automation. The application streamlines the entire proposal lifecycle from RFI/RFP intake to final delivery.

### Tech Stack
- **Framework**: React 19.2.5
- **Build Tool**: Vite 8.0.10
- **Routing**: React Router DOM 7.15.0
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 12.38.0
- **Icons**: Lucide React 1.14.0
- **Language**: JavaScript (ES6+)

---

## Application Structure

### Core Pages & Features

#### 1. **Authentication**
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - New user registration
- **Home** (`/`) - Landing page with product overview

#### 2. **Dashboard** (`/dashboard`)
Main overview page displaying:
- Statistics cards (Total Projects, Active Proposals, Requests, Completed)
- Recent Projects list
- Recent Requests feed
- Recent Proposals table with status tracking
- Quick actions (New Project, Search)

#### 3. **Project Management**

##### Projects (`/projects`, `/recent-projects`)
- Grid view of all projects
- Filter by status: All, Active, Draft, Completed
- Project cards showing:
  - Project name
  - Status badge
  - Last updated timestamp
  - Project type (RFP/RFI)
- Click to navigate to Proposal Builder

##### New Project (`/new-project`)
Multi-section project creation form:
- **Project Details**: Name, Description
- **RFI Sources**: 
  - Email integration (select from inbox)
  - Channel integration (Slack/Teams/Discord)
  - Manual upload (documents/text)
- **Product Information**: 
  - Product description
  - Image uploads
  - Video uploads
- **References & Assets**:
  - URL links
  - Document attachments

#### 4. **Proposal Management**

##### Proposals (`/proposals`)
- Table view of all proposals
- Columns: Proposal Name, Project, Status, Last Updated, Actions
- Status types: In Progress, Draft, In Review, Completed
- Actions: Edit, Preview
- Click row to open Proposal Builder

##### Proposal Builder (`/proposal-builder`)
Advanced proposal editor with:
- **Left Sidebar**: Section management
  - Checkbox selection for sections
  - Add/remove sections dynamically
  - Preview button
- **Main Content Area**:
  - Builder tab: Edit sections and subsections
  - Attachments tab: Manage proposal attachments
  - Version History tab: Track changes
- **Section Features**:
  - Add subsections
  - Version selection per subsection
  - Regenerate content
  - Attachment management (PDF, URL)

##### Drafts (`/drafts`)
- Grid view of draft proposals
- Search functionality
- Cards showing:
  - Draft title
  - Associated project
  - Last updated time
- Actions: Edit, Preview

##### Sent Proposals (`/sent-proposals`)
- Send proposals via Email or Channels
- Track sent proposals with:
  - Delivery status (Viewed, Delivered)
  - Recipient information
  - Timestamp
  - View proposal action
- Filter by Email/Channels tabs

##### Preview (`/preview`)
- Full document preview
- Formatted proposal display with:
  - Header section
  - Executive Summary
  - Technical Overview
  - Pricing & Terms
  - Attachments list
- Actions: Back to Builder, Download PDF, Send Proposal

#### 5. **Request Management**

##### Requests (`/requests`)
- Tabbed interface: Emails, Channels, Uploads
- Email request cards showing:
  - Request title
  - Sender information
  - Subject line
  - Preview text
  - Date received
- Action: Create Proposal from request

##### Channels (`/channels`)
- Integration with communication platforms (Slack, Teams, Discord)
- Channel request cards with:
  - Request title
  - Company name
  - Channel type badge
  - Timestamp
- Search functionality
- Create proposal action

##### Uploads (`/uploads`)
- Manual request entry via textarea
- File upload interface (drag & drop)
- Uploaded files list with:
  - File name
  - File size
  - Remove action
- Generate proposal from uploaded content

#### 6. **Content Management**

##### Templates (`/templates`)
- Category filters: All, Business, Sales, Marketing, Freelance, Startup
- Template grid with preview cards
- Template actions:
  - Preview
  - Duplicate
  - Download
  - Delete
  - Use Template
- Search functionality

##### Product Library (`/product-library`)
- Asset management system
- Filter tabs: All, Documents, Images, Videos, URLs
- Project selector dropdown
- Asset cards showing:
  - Asset preview
  - File name
  - File size
  - Asset type badge
- Actions: View, Copy, Download, Delete
- Upload new assets

#### 7. **Collaboration**

##### Shared With Me (`/shared-with-me`)
- View projects/proposals shared by team members
- Statistics cards:
  - Shared Projects count
  - Recent Shares count
  - Pending Invitations count
- Table view with:
  - Project/Proposal name
  - Shared by (name & email)
  - Shared date
  - Last activity
  - Actions (View, Edit, Delete)
- Search functionality

#### 8. **Settings** (`/settings`)
- Left sidebar navigation:
  - Profile
  - Notifications
  - Security
  - Integrations
  - Appearance
- **Profile Settings**:
  - Full Name
  - Email Address
  - Save changes
- **Notifications**:
  - Email notifications toggle
  - Channel notifications toggle

---

## Component Architecture

### Layout Components
- **MainLayout**: Wrapper with Sidebar + content area
- **Sidebar**: Navigation menu with sections:
  - MAIN (Dashboard)
  - PROJECTS (All Projects, Shared with me, Templates)
  - PROPOSALS (RFPs/RFIs, Drafts, Sent Proposals)
  - REQUESTS (Emails, Channels, Uploads)
  - DATA & CONTENT (Product Library)
  - ADMIN (Settings)

### Design System

#### Color Palette
- Primary Navy: `#242525`
- Dark Gray: `#4D4D4D`
- Medium Gray: `#797979`
- Light Gray: `#C6C6C6`
- Background: `#E6E6E6`, `#FDFCFD`, `#D8D8D8`
- Accent: `#EDEDED`, `#F5F5F5`

#### UI Patterns
- **Cards**: Rounded corners (rounded-3xl), backdrop blur, hover effects
- **Buttons**: Rounded (rounded-2xl), shadow effects, hover scale animations
- **Inputs**: Rounded (rounded-2xl), border focus states
- **Status Badges**: Rounded-full, color-coded by status
- **Icons**: Lucide React, consistent sizing (16-24px)

#### Animations
- Framer Motion for:
  - Hover effects (y-axis translation, scale)
  - Page transitions
  - Card interactions
  - Button feedback (whileTap)

---

## Routing Structure

```
/                       → Home (Landing)
/login                  → Login
/register               → Register
/dashboard              → Dashboard
/projects               → Projects List
/recent-projects        → Projects List (same as /projects)
/new-project            → New Project Form
/proposals              → Proposals List
/proposal-builder       → Proposal Editor
/drafts                 → Draft Proposals
/sent-proposals         → Sent Proposals
/preview                → Proposal Preview
/requests               → Email Requests
/channels               → Channel Requests
/uploads                → Upload Requests
/templates              → Template Library
/product-library        → Product Assets
/shared-with-me         → Shared Items
/settings               → Settings
```

---

## Key User Flows

### 1. Create New Proposal
1. Dashboard → New Project button
2. Fill project details
3. Select RFI source (Email/Channel/Upload)
4. Add product information
5. Add references/assets
6. Navigate to Proposal Builder
7. Select/edit sections
8. Add subsections and content
9. Preview proposal
10. Send or save as draft

### 2. Manage Incoming Requests
1. Requests page → View email/channel requests
2. Click request card
3. Auto-populate project with request details
4. Build proposal from request
5. Send to requester

### 3. Template Usage
1. Templates page → Browse categories
2. Select template
3. Use Template button
4. Customize for project
5. Save or send

### 4. Collaboration
1. Shared With Me → View shared items
2. Access shared proposals
3. Edit (if permissions allow)
4. Track activity

---

## State Management
- React useState for local component state
- React Router for navigation state
- No global state management (Redux/Context) currently implemented

## Data Flow
- Currently using mock/static data
- All data is client-side only
- No API integration yet (ready for backend connection)

---

## Backend Integration Requirements

Based on the frontend structure, the backend should provide:

### API Endpoints Needed

#### Authentication
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/logout`
- `GET /api/auth/me`

#### Projects
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project details
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `GET /api/projects/recent` - Recent projects

#### Proposals
- `GET /api/proposals` - List all proposals
- `POST /api/proposals` - Create proposal
- `GET /api/proposals/:id` - Get proposal details
- `PUT /api/proposals/:id` - Update proposal
- `DELETE /api/proposals/:id` - Delete proposal
- `POST /api/proposals/:id/send` - Send proposal
- `GET /api/proposals/drafts` - Get drafts
- `GET /api/proposals/sent` - Get sent proposals

#### Requests
- `GET /api/requests/emails` - Email requests
- `GET /api/requests/channels` - Channel requests
- `GET /api/requests/uploads` - Uploaded requests
- `POST /api/requests/upload` - Upload request file
- `POST /api/requests/manual` - Create manual request

#### Templates
- `GET /api/templates` - List templates
- `GET /api/templates/:id` - Get template
- `POST /api/templates` - Create template
- `PUT /api/templates/:id` - Update template
- `DELETE /api/templates/:id` - Delete template

#### Product Library
- `GET /api/products` - List products/assets
- `POST /api/products` - Upload asset
- `GET /api/products/:id` - Get asset
- `DELETE /api/products/:id` - Delete asset
- `GET /api/products/by-project/:projectId` - Assets by project

#### Sharing
- `GET /api/shares` - Items shared with user
- `POST /api/shares` - Share item
- `DELETE /api/shares/:id` - Remove share

#### Channels Integration
- `GET /api/channels` - Connected channels
- `POST /api/channels/connect` - Connect channel
- `GET /api/channels/:id/messages` - Channel messages

#### Settings
- `GET /api/settings` - User settings
- `PUT /api/settings` - Update settings
- `PUT /api/settings/notifications` - Update notification preferences

### Data Models Required

1. **User**: id, name, email, password, createdAt, updatedAt
2. **Project**: id, userId, name, description, status, type, createdAt, updatedAt
3. **Proposal**: id, projectId, userId, name, status, content, sections, createdAt, updatedAt, sentAt
4. **Draft**: id, proposalId, userId, content, createdAt, updatedAt
5. **Request**: id, userId, type (email/channel/upload), source, title, content, sender, createdAt
6. **Template**: id, userId, name, category, content, sections, createdAt, updatedAt
7. **Product/Asset**: id, projectId, userId, type (document/image/video/url), name, url, size, createdAt
8. **Share**: id, itemId, itemType, ownerId, sharedWithId, permissions, createdAt
9. **Channel**: id, userId, type (slack/teams/discord), channelId, channelName, connected, createdAt
10. **Upload**: id, userId, fileName, fileSize, fileType, url, createdAt

### File Upload Requirements
- Support for PDF, DOCX, images (PNG, JPG), videos (MP4)
- File size limits (suggested: 50MB for documents, 100MB for videos)
- Cloud storage integration (AWS S3, Azure Blob, etc.)

### Real-time Features (Optional)

- WebSocket for live collaboration
- Real-time proposal status updates
- Notification system for shares and comments

---

## Project Directory Structure

```
proposify/
├── public/                      # Static assets
│   ├── favicon.svg
│   └── icons.svg
│
├── src/                         # Source code
│   ├── assets/                  # Images and static files
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/              # Reusable components
│   │   └── layout/
│   │       ├── MainLayout.jsx   # Main layout wrapper
│   │       └── Sidebar.jsx      # Navigation sidebar
│   │
│   ├── pages/                   # Page components (18 pages)
│   │   ├── Home.jsx             # Landing page
│   │   ├── Login.jsx            # Login page
│   │   ├── Register.jsx         # Registration page
│   │   ├── Dashboard.jsx        # Main dashboard
│   │   ├── Projects.jsx         # Projects list
│   │   ├── NewProject.jsx       # Create new project
│   │   ├── Proposals.jsx        # Proposals list
│   │   ├── ProposalBuilder.jsx  # Proposal editor
│   │   ├── Drafts.jsx           # Draft proposals
│   │   ├── SentProposals.jsx    # Sent proposals
│   │   ├── Preview.jsx          # Proposal preview
│   │   ├── Requests.jsx         # Email requests
│   │   ├── Channels.jsx         # Channel requests
│   │   ├── Uploads.jsx          # Upload requests
│   │   ├── Templates.jsx        # Template library
│   │   ├── ProductLibrary.jsx   # Product assets
│   │   ├── SharedWithMe.jsx     # Shared items
│   │   └── Settings.jsx         # User settings
│   │
│   ├── routes/                  # Route definitions (unused)
│   │   └── AppRoutes.jsx        # ⚠️ Not currently used
│   │
│   ├── App.jsx                  # Main app component with routing
│   ├── App.css                  # App styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
│
├── .git/                        # Git repository
├── .vscode/                     # VS Code settings
├── node_modules/                # Dependencies
│
├── .gitignore                   # Git ignore rules
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML entry point
├── package.json                 # Project dependencies
├── package-lock.json            # Dependency lock file
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
```

---

## Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Future Enhancements
- AI-powered content generation
- Real-time collaboration
- Advanced analytics dashboard
- Email/Calendar integration
- Mobile responsive improvements
- Dark mode support
- Multi-language support
- Export to multiple formats (PDF, DOCX, PPT)
# Contributing to Clippkit

Thank you for your interest in contributing to Clippkit! We appreciate your support and look forward to your contributions. This guide will help you understand the directory structure and provide detailed instructions on how to add a new component to Clippkit.

To add a new component or effect, you'll typically need to create or modify 5 main types of files. Familiarize yourself with existing components like `SlidingText` to understand the pattern.

1.  **Component Source File**: e.g., `apps/docs/registry/default/ui/sliding-text.tsx`
2.  **Component Demo File**: e.g., `apps/docs/registry/default/examples/sliding-text-demo.tsx`
3.  **Documentation File (MDX)**: e.g., `apps/docs/content/docs/ui/(components)/text-elements/slide-text.mdx`
4.  **Registry Update for Components**: `apps/docs/registry/registry-components.ts`
5.  **Registry Update for Examples**: `apps/docs/registry/registry-examples.ts`

Once done, open a pull request from your forked repo to the main Clippkit repository.

## Getting Started

### Fork and Clone the Repository

1.  **Fork this repository**: Click the "Fork" button at the top right of the Clippkit GitHub page.
2.  **Clone your forked repository** to your local machine:
    ```bash
    git clone https://github.com/<YOUR_USERNAME>/clippkit.git
    ```
3.  **Navigate to the project directory**:
    ```bash
    cd clippkit
    ```
4.  **Create a new branch** for your changes:
    ```bash
    git checkout -b my-new-component-branch
    ```
5.  **Install dependencies**:
    ```bash
    pnpm install
    ```
6.  **Create a `.env.local` file** (if not already present, for the docs site):

    ```bash
    touch apps/docs/.env.local && echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" > apps/docs/.env.local
    ```

    _Note: Confirm if other specific environment variables are needed for Clippkit development._

7.  **Run the project** (starts the documentation and registry locally):
    ```bash
    pnpm run dev
    ```

## Adding a New Component

To add a new component to Clippkit, follow these steps. We'll use `example-component` as a placeholder for your component's name.

### 1. Create the Component File

Create the main component in `apps/docs/registry/default/ui/example-component.tsx`.

```tsx title="apps/docs/registry/default/ui/example-component.tsx"
"use client"; // If applicable for your component

import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import React from "react"; // Or other necessary imports

// Define your props interface
interface ExampleComponentProps {
  text?: string;
  // Add other props here
}

export default function ExampleComponent({
  text = "Hello World!",
}: ExampleComponentProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Your component logic and animations here
  const opacity = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 30,
  });

  return (
    <div style={{ opacity, textAlign: "center", fontSize: "4rem" }}>
      {text}
      {/* Your component JSX */}
    </div>
  );
}
```

Ensure your component is well-structured and follows the patterns used in other Clippkit components.

### 2. Create the Component Demo File

Provide a basic example to showcase your component in `apps/docs/registry/default/examples/example-component-demo.tsx`. This demo will be displayed on the documentation site.

```tsx title="apps/docs/registry/default/examples/example-component-demo.tsx"
import { Player } from "@remotion/player";
import ExampleComponent from "../ui/example-component"; // Adjust path if needed

export default function ExampleComponentDemo() {
  const componentProps = {
    text: "Example Component in Action!",
    // other props for your component
  };

  return (
    <Player
      component={ExampleComponent}
      inputProps={componentProps}
      durationInFrames={90} // Example duration
      compositionWidth={1280}
      compositionHeight={720}
      fps={30}
      style={{
        width: "100%",
        height: "100%",
      }}
      autoPlay
      controls
      loop
    />
  );
}
```

### 3. Create the Documentation File (MDX)

Create an MDX file for documenting your component. Place it in a relevant sub-directory within `apps/docs/content/docs/ui/(components)/`. For example, if it's a text effect, it might go into a `text-effects` sub-directory. Create the directory if it doesn't exist.

File path: `apps/docs/content/docs/ui/(components)/<category>/example-component.mdx`

````mdx title="apps/docs/content/docs/ui/(components)/<category>/example-component.mdx"
---
title: Example Component
description: A brief description of what the Example Component does.
preview: true # This likely enables the live preview tab
---

<ComponentTabs name="example-component-demo" />
{/* This should match the demo name */}

## Installation

### CLI (Coming Soon)

<Callout title="COMING SOON" type="warn">
  Installation via CLI isn't quite ready yet. For now, please follow the manual
  installation instructions.
</Callout>

### Manual

<Steps>
  <Step>
    Create a new file, for example, at `src/components/example-component.tsx` (or your preferred location in the user's project) and paste the following code into it.

    ```tsx title="src/components/example-component.tsx"
    // Paste the code of your actual component here (from step 1)
    // Ensure to guide the user on "use client" if necessary, and imports
    "use client";

    import { spring, useCurrentFrame, useVideoConfig } from "remotion";
    import React from 'react';

    interface ExampleComponentProps {
      text?: string;
    }

    export default function ExampleComponent({ text = "Hello World!" }: ExampleComponentProps) {
      const frame = useCurrentFrame();
      const { fps } = useVideoConfig();

      const opacity = spring({
        frame,
        fps,
        from: 0,
        to: 1,
        durationInFrames: 30,
      });

      return (
        <div style={{ opacity, textAlign: 'center', fontSize: '4rem' }}>
          {text}
        </div>
      );
    }
    ```

  </Step>
  
  <Step>Update the import paths in your Remotion compositions if you placed the file in a different location than shown in the usage examples.</Step>
</Steps>

## Usage

Showcase how to use the component in a Remotion project.

```tsx title="src/MyVideo.tsx (or equivalent)"
import { Composition } from "remotion";
import ExampleComponent from "./components/example-component"; // User's project path

export const MyVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="ExampleScene"
        component={ExampleComponent}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          text: "My Example Title",
          // other props
        }}
      />
    </>
  );
};
```

## API Reference

Document the props your component accepts.

| Prop       | Type     | Default Value  | Description              |
| ---------- | -------- | -------------- | ------------------------ |
| `text`     | `string` | "Hello World!" | The text to display.     |
| `propName` | `Type`   | `defaultValue` | Description of the prop. |

### 4. Update Registry Files

Add your component and its demo to the registry.

**A. Update `apps/docs/registry/registry-components.ts`:**

Add an entry for your new component.

```typescript title="apps/docs/registry/registry-components.ts"
// ... existing imports and components array
export const components: Registry = [
  // ... existing components
  {
    name: "example-component", // kebab-case name
    type: "registry:component",
    files: [
      {
        path: "ui/example-component.tsx", // Path relative to apps/docs/registry/default/
        type: "registry:component",
      },
    ],
  },
];
```
````

**B. Update `apps/docs/registry/registry-examples.ts`:**

Add an entry for your new component's demo.

```typescript title="apps/docs/registry/registry-examples.ts"
// ... existing imports and examples array
export const examples: Registry = [
  // ... existing examples
  {
    name: "example-component-demo", // Must match the name used in <ComponentTabs name="..."/>
    type: "registry:example",
    files: [
      {
        path: "examples/example-component-demo.tsx", // Path relative to apps/docs/registry/default/
        type: "registry:example",
      },
    ],
  },
];
```

### 5. Build Registry (If Applicable)

If there's a command to build or update the registry based on these changes, run it. Your example mentioned `pnpm build:registry`.

```bash
pnpm build:registry
```

_(If this command is not part of Clippkit's workflow, this step can be omitted or adjusted.)_

### 6. Format and Fix Linting Before Committing

Ensure your code adheres to the project's coding standards.

```bash
pnpm format:write
pnpm lint:fix
```

_(Adjust these commands if Clippkit uses different formatting/linting tools or scripts.)_

Make sure to run these commands before committing your changes.

## Ask for Help

For any help or questions, please open a new GitHub issue on the [Clippkit repository](https://github.com/reactvideoeditor/clippkit/issues) (replace with the actual repository link if different).

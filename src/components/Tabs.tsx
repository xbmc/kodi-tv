import React from "react";
import { Tabs as ShadcnTabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

interface Props {
  tabs?: { name: string }[];
  children: React.ReactElement<{ label: string; children?: React.ReactNode }>[];
}

function Tabs({ children }: Props) {
  const labels = children.map(child => child.props.label);
  const defaultValue = labels[0];

  return (
    <ShadcnTabs defaultValue={defaultValue}>
      <TabsList>
        {labels.map(label => (
          <TabsTrigger key={label} value={label}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children.map(child => (
        <TabsContent key={child.props.label} value={child.props.label}>
          {child.props.children}
        </TabsContent>
      ))}
    </ShadcnTabs>
  );
}

export default Tabs;

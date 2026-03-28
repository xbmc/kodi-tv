import type { FunctionComponent } from "react";

export interface MenuEntry {
    id: string;
    title: string;
    url: { url: string; type: "external" | "internal" } | undefined;
    buttonType: string;
    footer: string | null;
    dropdown: DropDownItem[] | null;
}

export interface DropDownItem {
    id: string;
    title: string;
    url: { url: string; type: "external" | "internal" } | undefined;
    icon: FunctionComponent | null;
    description: string | null;
}

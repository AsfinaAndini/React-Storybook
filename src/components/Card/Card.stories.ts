import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
    title: "Molecule/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: {
                type: "text",
            },
        },
        description: {
            control: {
                type: "text",
            }
        },
        variant: {
            control: {
                type: "radio",
            },
            options: ["Light", "Dark"],
        }
    },
    args: {
        title: "Card Title",
        description: "Card description"
    }
}

export default meta;
type Story = StoryObj<typeof Card>

export const Asfina: Story = {
    args: {
        title: "Asfina Andini",
        description: "Student at SMK Telkom Malang"
    }
}
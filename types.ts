import { ReactNode } from "react";

export interface AgentProps {
  name: string;
  category: string;
  reputation: number;
  tvl: string;
  apy: string;
  description: string;
  tags: string[];
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

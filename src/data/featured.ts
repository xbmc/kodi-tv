import fs from "node:fs";
import yaml from "js-yaml";

interface FeaturedYaml {
  addons: { addonid: string }[];
}

let _featuredIds: string[] | null = null;

export function getFeaturedAddonIds(): string[] {
  if (_featuredIds !== null) return _featuredIds;
  const raw = fs.readFileSync("src/data/addons/omega/featured.yaml", "utf8");
  const data = yaml.load(raw) as FeaturedYaml;
  _featuredIds = data.addons.map(a => a.addonid);
  return _featuredIds;
}

export function isFeatured(addonId: string): boolean {
  return getFeaturedAddonIds().includes(addonId);
}

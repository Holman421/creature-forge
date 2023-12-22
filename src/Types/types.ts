export type PrompType = {
  size: SizeValueType;
  numberOfCreatures: NumberOfCreaturesValueType;
  legs: LegsValueType;
  arms: ArmsValueType;
  habitat: HabitatValueType;
  appearance: AppearanceValueType;
  specialFeature: SpecialFeatureValueType[];
  artStyle: ArtStyleValueType;
  color: ColorValueType;
  diet: DietValueType;
  aspectRatio: AspectRatioValueType;
};

export type LegsValueType =
  | (typeof armsOptions)[keyof typeof armsOptions]
  | null;
export type ArmsValueType =
  | (typeof armsOptions)[keyof typeof armsOptions]
  | null;
export type SizeValueType =
  | (typeof sizeOptions)[keyof typeof sizeOptions]
  | null;
export type HabitatValueType =
  | (typeof habitatOptions)[keyof typeof habitatOptions]
  | null;
export type AppearanceValueType =
  | (typeof appearanceOptions)[keyof typeof appearanceOptions]
  | null;
export type SpecialFeatureValueType =
  | (typeof specialFeatureOptions)[keyof typeof specialFeatureOptions]
  | null;
export type ArtStyleValueType =
  | (typeof artStyleOptions)[keyof typeof artStyleOptions]
  | null;
export type ColorValueType =
  | (typeof colorOptions)[keyof typeof colorOptions]
  | null;
export type DietValueType =
  | (typeof dietOptions)[keyof typeof dietOptions]
  | null;

export type AspectRatioValueType =
  | (typeof aspectRatioOptions)[keyof typeof aspectRatioOptions]
  | null;

export type NumberOfCreaturesValueType =
  | (typeof numberOfCreaturesOptions)[keyof typeof numberOfCreaturesOptions]
  | null;

export type PrompValueType =
  | null
  | LegsValueType
  | ArmsValueType
  | SizeValueType
  | HabitatValueType
  | AppearanceValueType
  | SpecialFeatureValueType
  | ArtStyleValueType
  | ColorValueType
  | DietValueType
  | AspectRatioValueType
  | NumberOfCreaturesValueType;

export const legsOptions = {
  ["No legs"]: "with worm-like legless body",
  ["2 Legs"]: "with two legs",
  ["4 Legs"]: "with four legs",
  ["6 Legs"]: "with six legs",
  ["8 Legs"]: "with eight legs",
  ["Many legs"]: "with countless legs",
} as const;

export const armsOptions = {
  ["No arms"]: "and arms-less torso",
  ["2 Arms"]: "and two arms",
  ["4 Arms"]: "and four arms",
  ["Many arms"]: "and countless arms",
} as const;

export const sizeOptions = {
  Microscopic:
    "Close shot of tiny mystical microorganism, bacteria, or virus",
  Small: "Small mystical creature, smaller than 1 meter",
  ["Human sized"]:
    "Eye-level view of a human-sized mystical creature",
  Huge: "Huge mystical creature towering over landscapes, seen from afar",
} as const;

export const habitatOptions = {
  Jungle:
    "camouflaged in dense green jungle among trees and exotic plants",
  Underwater:
    "in the depths of the ocean, surrounded by corals and sea creatures",
  Air: "soaring through the sky throught fluffy clouds",
  Artic: "in Antarctica, surrounded by snow and ice",
  Space: "in space surrounded by distant stars and planets",
  Desert:
    "in desert blending with sand and rocky formations",
  Mountains:
    "in giant towering mountains covered in rocks and trees",
  Forest:
    "in tundra forest surrounded with mystical mushrooms and ancient trees",
  Swamp:
    "in swamp, surrounded by murky waters, trees, and diverse plants",
  Cave: "in a dark cave filled with rugged rocks and glowing crystals",
  City: "in city with buildings, roads, cars, and people",
  Hell: "in Hell, surrounded by flames and lava and bones and skulls",
} as const;

export const specialFeatureOptions = {
  ["Thick scales"]: "covered with thick rock solid scales",
  ["Wings"]: "with majestic wings that spread wide",
  ["Tentacles"]: "with graceful tendrils and tentacles",
  ["Claws"]: "equipped with shiny razor-sharp claws",
  ["Glowing eyes"]:
    "piercing red eyes that emit an ethereal glow",
  ["Exoskeleton"]: "protected by a exoskeleton",
  ["Fur"]: "covered with warm fur",
  ["Bioluminescence"]:
    "bioluminescence, illuminating its surroundings",
} as const;

export const appearanceOptions = {
  Friendly: "with friendly and cute appearance",
  Aggresive:
    "with aggresive appearance and threatening face",
  Sad: "with sad appearance with a sad crying face",
  Scary: "with scary appearance evoking fear and terror",
} as const;

export const artStyleOptions = {
  ["Classic"]: "imbued with the dynamic and vibrant colors",
  ["Steampunk"]:
    "in steampunk art style of old steam powered machinery and gears",
  ["Futuristic"]:
    "in futuristic art style of the cyberpunk era with the neon aesthetic",
  ["Pensil sketch"]:
    "style of black and white pencil sketch, no color, only black and white",
  ["Pixel art"]:
    "highly pixelated, 8-bit pixel art, pixel art, ",
  ["Psychedelic art"]:
    "exploring the kaleidoscopic realms of mind-bending psychedelic art",
  ["Minecraft"]: "in the blocky world of Minecraft",
  ["Zdzisław Beksiński"]:
    "in the depressive and dark world of Zdzisław Beksiński",
} as const;

export const colorOptions = {
  ["White"]: "white color",
  ["Black"]: "black color",
  ["Brown"]: "brown color",
  ["Orange"]: "orange color",
  ["Red"]: "red color",
  ["Blue"]: "blue color",
  ["Green"]: "green color",
  ["Rainbow"]: "rainbow color",
} as const;

export const dietOptions = {
  ["Carnivore"]: "with carnivore diet",
  ["Herbivore"]:
    "with herbivore diet",
} as const;

export const aspectRatioOptions = {
  ["1/1"]: "1/1",
  ["4/3"]: "4/3",
  ["16/9"]: "16/9",
  ["9/16"]: "9/16",
} as const;

export const numberOfCreaturesOptions = {
  Single: "",
  Multiple: "Multiple creatues",
} as const;

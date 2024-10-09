export interface Result {
  code: string;
  product: Product;
  status: number;
  status_verbose: string;
}
export interface Product {
  _id: string;
  _keywords?: (string)[] | null;
  added_countries_tags?: (null)[] | null;
  additives_n: number;
  additives_original_tags?: (string)[] | null;
  additives_tags?: (string)[] | null;
  allergens: string;
  allergens_from_ingredients: string;
  allergens_from_user: string;
  allergens_hierarchy?: (null)[] | null;
  allergens_tags?: (null)[] | null;
  amino_acids_tags?: (string)[] | null;
  brands: string;
  brands_tags?: (string)[] | null;
  categories: string;
  categories_hierarchy?: (string)[] | null;
  categories_lc: string;
  categories_properties: any;
  categories_properties_tags?: (string)[] | null;
  categories_tags?: (string)[] | null;
  checkers_tags?: (null)[] | null;
  code: string;
  codes_tags?: (string)[] | null;
  compared_to_category: string;
  complete: number;
  completeness: number;
  correctors_tags?: (string)[] | null;
  countries: string;
  countries_hierarchy?: (string)[] | null;
  countries_tags?: (string)[] | null;
  created_t: number;
  creator: string;
  data_quality_bugs_tags?: (null)[] | null;
  data_quality_errors_tags?: (string)[] | null;
  data_quality_info_tags?: (string)[] | null;
  data_quality_tags?: (string)[] | null;
  data_quality_warnings_tags?: (string)[] | null;
  data_sources: string;
  data_sources_tags?: (string)[] | null;
  ecoscore_data: EcoscoreData;
  ecoscore_grade: string;
  ecoscore_tags?: (string)[] | null;
  editors_tags?: (string)[] | null;
  entry_dates_tags?: (string)[] | null;
  food_groups_tags?: (null)[] | null;
  id: string;
  image_front_small_url: string;
  image_front_thumb_url: string;
  image_front_url: string;
  image_ingredients_small_url: string;
  image_ingredients_thumb_url: string;
  image_ingredients_url: string;
  image_nutrition_small_url: string;
  image_nutrition_thumb_url: string;
  image_nutrition_url: string;
  image_packaging_small_url: string;
  image_packaging_thumb_url: string;
  image_packaging_url: string;
  image_small_url: string;
  image_thumb_url: string;
  image_url: string;
  images: Images;
  informers_tags?: (string)[] | null;
  ingredients?: (IngredientsEntity)[] | null;
  ingredients_analysis: IngredientsAnalysis;
  ingredients_analysis_tags?: (string)[] | null;
  ingredients_from_or_that_may_be_from_palm_oil_n: number;
  ingredients_from_palm_oil_n: number;
  ingredients_from_palm_oil_tags?: (null)[] | null;
  ingredients_hierarchy?: (string)[] | null;
  ingredients_lc: string;
  ingredients_n: number;
  ingredients_n_tags?: (string)[] | null;
  ingredients_non_nutritive_sweeteners_n: number;
  ingredients_original_tags?: (string)[] | null;
  ingredients_percent_analysis: number;
  ingredients_sweeteners_n: number;
  ingredients_tags?: (string)[] | null;
  ingredients_text: string;
  ingredients_text_en: string;
  ingredients_text_with_allergens: string;
  ingredients_text_with_allergens_en: string;
  ingredients_that_may_be_from_palm_oil_n: number;
  ingredients_that_may_be_from_palm_oil_tags?: (null)[] | null;
  ingredients_with_specified_percent_n: number;
  ingredients_with_specified_percent_sum: number;
  ingredients_with_unspecified_percent_n: number;
  ingredients_with_unspecified_percent_sum: number;
  ingredients_without_ciqual_codes?: (string)[] | null;
  ingredients_without_ciqual_codes_n: number;
  interface_version_created: string;
  interface_version_modified: string;
  known_ingredients_n: number;
  labels: string;
  labels_hierarchy?: (string)[] | null;
  labels_lc: string;
  labels_tags?: (string)[] | null;
  lang: string;
  languages: Languages;
  languages_codes: LanguagesCodes;
  languages_hierarchy?: (string)[] | null;
  languages_tags?: (string)[] | null;
  last_edit_dates_tags?: (string)[] | null;
  last_editor: string;
  last_image_dates_tags?: (string)[] | null;
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  last_updated_t: number;
  lc: string;
  main_countries_tags?: (null)[] | null;
  max_imgid: string;
  minerals_tags?: (null)[] | null;
  misc_tags?: (string)[] | null;
  no_nutrition_data: string;
  nova_group: number;
  nova_group_debug: string;
  nova_groups: string;
  nova_groups_markers: NovaGroupsMarkers;
  nova_groups_tags?: (string)[] | null;
  nucleotides_tags?: (null)[] | null;
  nutrient_levels: NutrientLevels;
  nutrient_levels_tags?: (string)[] | null;
  nutriments: Nutriments;
  nutriscore: Nutriscore;
  nutriscore_2021_tags?: (string)[] | null;
  nutriscore_2023_tags?: (string)[] | null;
  nutriscore_data: NutriscoreData;
  nutriscore_grade: string;
  nutriscore_score: number;
  nutriscore_score_opposite: number;
  nutriscore_tags?: (string)[] | null;
  nutriscore_version: string;
  nutrition_data: string;
  nutrition_data_per: string;
  nutrition_data_prepared_per: string;
  nutrition_grade_fr: string;
  nutrition_grades: string;
  nutrition_grades_tags?: (string)[] | null;
  nutrition_score_beverage: number;
  nutrition_score_debug: string;
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients: number;
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number;
  other_nutritional_substances_tags?: (string)[] | null;
  packaging_materials_tags?: (null)[] | null;
  packaging_recycling_tags?: (null)[] | null;
  packaging_shapes_tags?: (null)[] | null;
  packagings?: (null)[] | null;
  packagings_materials: any;
  photographers_tags?: (string)[] | null;
  pnns_groups_1: string;
  pnns_groups_1_tags?: (string)[] | null;
  pnns_groups_2: string;
  pnns_groups_2_tags?: (string)[] | null;
  popularity_key: number;
  product_name: string;
  product_name_en: string;
  product_quantity: string;
  product_type: string;
  quantity: string;
  removed_countries_tags?: (null)[] | null;
  rev: number;
  selected_images: SelectedImages;
  serving_quantity: string;
  serving_quantity_unit: string;
  serving_size: string;
  states: string;
  states_hierarchy?: (string)[] | null;
  states_tags?: (string)[] | null;
  traces: string;
  traces_from_ingredients: string;
  traces_from_user: string;
  traces_hierarchy?: (null)[] | null;
  traces_tags?: (null)[] | null;
  unknown_ingredients_n: number;
  unknown_nutrients_tags?: (null)[] | null;
  update_key: string;
  vitamins_tags?: (null)[] | null;
  weighers_tags?: (null)[] | null;
  with_non_nutritive_sweeteners: number;
}

export interface EcoscoreData {
  adjustments: Adjustments;
  agribalyse: Agribalyse;
  missing: Missing;
  missing_agribalyse_match_warning: number;
  missing_key_data: number;
  scores: any;
  status: string;
}
export interface Adjustments {
  origins_of_ingredients: OriginsOfIngredients;
  packaging: Packaging;
  production_system: ProductionSystem;
  threatened_species: any;
}
export interface OriginsOfIngredients {
  aggregated_origins?: (AggregatedOriginsEntity)[] | null;
  epi_score: number;
  epi_value: number;
  origins_from_categories?: (string)[] | null;
  origins_from_origins_field?: (string)[] | null;
  transportation_score: number;
  transportation_scores: TransportationScoresOrTransportationValuesOrValues;
  transportation_value: number;
  transportation_values: TransportationScoresOrTransportationValuesOrValues;
  value: number;
  values: TransportationScoresOrTransportationValuesOrValues;
}
export interface AggregatedOriginsEntity {
  epi_score: number | string;
  origin: string;
  percent: number;
  transportation_score?: null;
}
export interface TransportationScoresOrTransportationValuesOrValues {
  ad: number;
  al: number;
  at: number;
  ax: number;
  ba: number;
  be: number;
  bg: number;
  ch: number;
  cy: number;
  cz: number;
  de: number;
  dk: number;
  dz: number;
  ee: number;
  eg: number;
  es: number;
  fi: number;
  fo: number;
  fr: number;
  gg: number;
  gi: number;
  gr: number;
  hr: number;
  hu: number;
  ie: number;
  il: number;
  im: number;
  is: number;
  it: number;
  je: number;
  lb: number;
  li: number;
  lt: number;
  lu: number;
  lv: number;
  ly: number;
  ma: number;
  mc: number;
  md: number;
  me: number;
  mk: number;
  mt: number;
  nl: number;
  no: number;
  pl: number;
  ps: number;
  pt: number;
  ro: number;
  rs: number;
  se: number;
  si: number;
  sj: number;
  sk: number;
  sm: number;
  sy: number;
  tn: number;
  tr: number;
  ua: number;
  uk: number;
  us: number;
  va: number;
  world: number;
  xk: number;
}
export interface Packaging {
  non_recyclable_and_non_biodegradable_materials: number;
  value: number;
  warning: string;
}
export interface ProductionSystem {
  labels?: (null)[] | null;
  value: number;
  warning: string;
}
export interface Agribalyse {
  warning: string;
}
export interface Missing {
  agb_category: number;
  labels: number;
  packagings: number;
}
export interface Images {
  1: _1Or2Or3Or4Or5Or6Or7Or8Or9Or10Or11;
  2: _1Or2Or3Or4Or5Or6Or7Or8Or9Or10Or11;
  3: _1Or2Or3Or4Or5Or6Or7Or8Or9Or10Or11;
  4: _1Or2Or3Or4Or5Or6Or7Or8Or9Or10Or11;
  5: _1Or2Or3Or4Or5Or6Or7Or8Or9Or10Or11;
  6: _1Or2Or3Or4Or5Or6Or7Or8Or9Or10Or11;
  7: _1Or2Or3Or4Or5Or6Or7Or8Or9Or10Or11;
  8: _1Or2Or3Or4Or5Or6Or7Or8Or9Or10Or11;
  9: _1Or2Or3Or4Or5Or6Or7Or8Or9Or10Or11;
  10: _1Or2Or3Or4Or5Or6Or7Or8Or9Or10Or11;
  11: _1Or2Or3Or4Or5Or6Or7Or8Or9Or10Or11;
  front_en: FrontEnOrIngredientsEnOrNutritionEnOrPackagingEn;
  ingredients_en: FrontEnOrIngredientsEnOrNutritionEnOrPackagingEn;
  nutrition_en: FrontEnOrIngredientsEnOrNutritionEnOrPackagingEn;
  packaging_en: FrontEnOrIngredientsEnOrNutritionEnOrPackagingEn;
}
export interface _1Or2Or3Or4Or5Or6Or7Or8Or9Or10Or11 {
  sizes: Sizes;
  uploaded_t: number;
  uploader: string;
}
export interface Sizes {
  100: _100Or400OrFullOr200;
  400: _100Or400OrFullOr200;
  full: _100Or400OrFullOr200;
}
export interface _100Or400OrFullOr200 {
  h: number;
  w: number;
}
export interface FrontEnOrIngredientsEnOrNutritionEnOrPackagingEn {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize?: null;
  rev: string;
  sizes: Sizes1;
  white_magic?: null;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}
export interface Sizes1 {
  100: _100Or400OrFullOr200;
  200: _100Or400OrFullOr200;
  400: _100Or400OrFullOr200;
  full: _100Or400OrFullOr200;
}
export interface IngredientsEntity {
  id: string;
  is_in_taxonomy: number;
  percent_estimate: number;
  percent_max: number;
  percent_min: number;
  rank?: number | null;
  text: string;
  has_sub_ingredients?: string | null;
  ciqual_food_code?: string | null;
  vegan?: string | null;
  vegetarian?: string | null;
  processing?: string | null;
  origins?: string | null;
}
export interface IngredientsAnalysis {
  'en:palm-oil-content-unknown'?: (string)[] | null;
  'en:vegan-status-unknown'?: (string)[] | null;
  'en:vegetarian-status-unknown'?: (string)[] | null;
}
export interface Languages {
  'en:english': number;
}
export interface LanguagesCodes {
  en: number;
}
export interface NovaGroupsMarkers {
  4?: ((string)[] | null)[] | null;
}
export interface NutrientLevels {
  fat: string;
  salt: string;
  'saturated-fat': string;
  sugars: string;
}
export interface Nutriments {
  carbohydrates: number;
  carbohydrates_100g: number;
  carbohydrates_serving: number;
  carbohydrates_unit: string;
  carbohydrates_value: number;
  energy: number;
  'energy-kcal': number;
  'energy-kcal_100g': number;
  'energy-kcal_serving': number;
  'energy-kcal_unit': string;
  'energy-kcal_value': number;
  'energy-kcal_value_computed': number;
  'energy-kj': number;
  'energy-kj_100g': number;
  'energy-kj_serving': number;
  'energy-kj_unit': string;
  'energy-kj_value': number;
  'energy-kj_value_computed': number;
  energy_100g: number;
  energy_serving: number;
  energy_unit: string;
  energy_value: number;
  fat: number;
  fat_100g: number;
  fat_serving: number;
  fat_unit: string;
  fat_value: number;
  fiber: number;
  fiber_100g: number;
  fiber_serving: number;
  fiber_unit: string;
  fiber_value: number;
  'fruits-vegetables-legumes-estimate-from-ingredients_100g': number;
  'fruits-vegetables-legumes-estimate-from-ingredients_serving': number;
  'fruits-vegetables-nuts-estimate-from-ingredients_100g': number;
  'fruits-vegetables-nuts-estimate-from-ingredients_serving': number;
  'nova-group': number;
  'nova-group_100g': number;
  'nova-group_serving': number;
  'nutrition-score-fr': number;
  'nutrition-score-fr_100g': number;
  proteins: number;
  proteins_100g: number;
  proteins_serving: number;
  proteins_unit: string;
  proteins_value: number;
  salt: number;
  salt_100g: number;
  salt_serving: number;
  salt_unit: string;
  salt_value: number;
  'saturated-fat': number;
  'saturated-fat_100g': number;
  'saturated-fat_serving': number;
  'saturated-fat_unit': string;
  'saturated-fat_value': number;
  sodium: number;
  sodium_100g: number;
  sodium_serving: number;
  sodium_unit: string;
  sodium_value: number;
  sugars: number;
  sugars_100g: number;
  sugars_serving: number;
  sugars_unit: string;
  sugars_value: number;
  'vitamin-c': number;
  'vitamin-c_100g': number;
  'vitamin-c_serving': number;
  'vitamin-c_unit': string;
  'vitamin-c_value': number;
}
export interface Nutriscore {
  2021: _2021;
  2023: _2023;
}
export interface _2021 {
  category_available: number;
  data: Data;
  grade: string;
  nutrients_available: number;
  nutriscore_applicable: number;
  nutriscore_computed: number;
  score: number;
}
export interface Data {
  energy: number;
  energy_points: number;
  energy_value: number;
  fiber: number;
  fiber_points: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  is_beverage: number;
  is_cheese: number;
  is_fat: number;
  is_water: number;
  negative_points: number;
  positive_points: number;
  proteins: number;
  proteins_points: number;
  proteins_value: number;
  saturated_fat: number;
  saturated_fat_points: number;
  saturated_fat_value: number;
  sodium: number;
  sodium_points: number;
  sodium_value: number;
  sugars: number;
  sugars_points: number;
  sugars_value: number;
}
export interface _2023 {
  category_available: number;
  data: Data1;
  grade: string;
  nutrients_available: number;
  nutriscore_applicable: number;
  nutriscore_computed: number;
  score: number;
}
export interface Data1 {
  components: Components;
  count_proteins: number;
  count_proteins_reason: string;
  is_beverage: number;
  is_cheese: number;
  is_fat_oil_nuts_seeds: number;
  is_red_meat_product: number;
  is_water: number;
  negative_points: number;
  negative_points_max: number;
  positive_nutrients?: (string)[] | null;
  positive_points: number;
  positive_points_max: number;
}
export interface Components {
  negative?: (NegativeEntityOrPositiveEntity)[] | null;
  positive?: (NegativeEntityOrPositiveEntity)[] | null;
}
export interface NegativeEntityOrPositiveEntity {
  id: string;
  points: number;
  points_max: number;
  unit: string;
  value: number;
}
export interface NutriscoreData {
  energy: number;
  energy_points: number;
  energy_value: number;
  fiber: number;
  fiber_points: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  grade: string;
  is_beverage: number;
  is_cheese: number;
  is_fat: number;
  is_water: number;
  negative_points: number;
  positive_points: number;
  proteins: number;
  proteins_points: number;
  proteins_value: number;
  saturated_fat: number;
  saturated_fat_points: number;
  saturated_fat_value: number;
  score: number;
  sodium: number;
  sodium_points: number;
  sodium_value: number;
  sugars: number;
  sugars_points: number;
  sugars_value: number;
}
export interface SelectedImages {
  front: FrontOrIngredientsOrNutritionOrPackaging;
  ingredients: FrontOrIngredientsOrNutritionOrPackaging;
  nutrition: FrontOrIngredientsOrNutritionOrPackaging;
  packaging: FrontOrIngredientsOrNutritionOrPackaging;
}
export interface FrontOrIngredientsOrNutritionOrPackaging {
  display: DisplayOrSmallOrThumb;
  small: DisplayOrSmallOrThumb;
  thumb: DisplayOrSmallOrThumb;
}
export interface DisplayOrSmallOrThumb {
  en: string;
}

export default async function handler(id: number) {
  const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${id}.json`)
  const data = await response.json()
  return data?.product ? data as Result : undefined
}
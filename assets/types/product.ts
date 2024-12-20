import { ImageSourcePropType } from 'react-native';
import { Category } from './category';

export type Product = {
  id: number;
  title: string;
  slug: string;
  images_url: ImageSourcePropType[];
  price: number;
  hero_image: ImageSourcePropType;
  category: Omit<Category, 'products'>;
  max_quantity: number;
};

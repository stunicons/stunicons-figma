interface IconsInterface {
    categoryName: string;
    icons: Icon[];
}

type Icon = {
    id: string;
    name: string;
    tags: string[];
};
type IconsList = {
    categoryName: string;
    icons: Icon[];
};

type Icon = {
    id: string;
    name: string;
    tags: string[];
};

type IconCategory = {
    name:string,
    category:string,
}
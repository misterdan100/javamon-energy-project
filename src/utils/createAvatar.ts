export const createAvatar = (name: string) => {
    const nameParts = name.split(" ");
    if (nameParts.length < 2) {
        throw new Error("Name must contain at least two parts");
    }
    const firstNameInitial = nameParts[0].charAt(0).toUpperCase();
    const secondNameInitial = nameParts[1].charAt(0).toUpperCase();
    return firstNameInitial + secondNameInitial;
};
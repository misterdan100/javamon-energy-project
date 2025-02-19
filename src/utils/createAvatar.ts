export const createAvatar = (name: string) => {
    const nameParts = name.split(" ");
    let avatar = "";

    if (nameParts.length < 2) {
        // If the name has only one word, take the first two letters
        avatar = nameParts[0].substring(0, 2).toUpperCase();
    } else {
        // If the name has at least two parts, take the first letter of each part
        const firstNameInitial = nameParts[0].charAt(0).toUpperCase();
        const secondNameInitial = nameParts[1].charAt(0).toUpperCase();
        avatar = firstNameInitial + secondNameInitial;
    }

    return avatar;
};
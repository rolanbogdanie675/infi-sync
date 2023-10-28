/*

Filename: sophisticatedCode.js

This code demonstrates the implementation of a complex and sophisticated application that simulates a virtual pet management system.

*/

// Pet class to define a pet object
class Pet {
    constructor(name, species, age, health, happiness) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.health = health;
        this.happiness = happiness;
    }

    sleep() {
        console.log(`${this.name} is sleeping... Zzzz`);
    }

    eat() {
        console.log(`${this.name} is eating... Yum Yum`);
    }

    play() {
        console.log(`${this.name} is playing... Yippie!`);
    }

    exercise() {
        console.log(`${this.name} is exercising... Keep it up!`);
    }
}

// VirtualPetManagementSystem class to handle the overall system and pet management
class VirtualPetManagementSystem {
    constructor() {
        this.pets = [];
    }

    addPet(pet) {
        this.pets.push(pet);
        console.log(`New pet ${pet.name} is added to the system.`);
    }

    removePet(pet) {
        const index = this.pets.findIndex(p => p.name === pet.name);
        if (index !== -1) {
            this.pets.splice(index, 1);
            console.log(`${pet.name} is removed from the system.`);
        } else {
            console.log(`${pet.name} is not found in the system.`);
        }
    }

    listPets() {
        console.log("Current pets in the system:");
        this.pets.forEach(pet => console.log(`- ${pet.name} (${pet.species}), ${pet.age} years old`));
    }

    feedAllPets() {
        this.pets.forEach(pet => {
            pet.eat();
            pet.health += 10;
        });
        console.log("All pets have been fed.");
    }

    playWithPet(petName) {
        const pet = this.pets.find(p => p.name === petName);
        if (pet) {
            pet.play();
            pet.happiness += 5;
        } else {
            console.log(`${petName} is not found in the system.`);
        }
    }
}

// Creating instances of Pet
const pet1 = new Pet("Fluffy", "Cat", 2, 80, 60);
const pet2 = new Pet("Buddy", "Dog", 4, 90, 70);
const pet3 = new Pet("Coco", "Rabbit", 1, 70, 50);

// Creating instance of VirtualPetManagementSystem
const petManagementSystem = new VirtualPetManagementSystem();

// Adding pets to the system
petManagementSystem.addPet(pet1);
petManagementSystem.addPet(pet2);
petManagementSystem.addPet(pet3);

// Listing current pets
petManagementSystem.listPets();

// Feeding all pets
petManagementSystem.feedAllPets();

// Playing with a pet
petManagementSystem.playWithPet("Fluffy");

// Removing a pet from the system
petManagementSystem.removePet(pet2);

// Listing current pets again
petManagementSystem.listPets();

// Putting a pet to sleep
pet1.sleep();
pet3.sleep();

// Performing exercise
pet1.exercise();
pet3.exercise();
namespace AbilityEntity {

    export enum ECondition {
        TARGET = 1 << 1,
        LINEARITY = 1 << 2,
        PLACE = 1 << 3,
    }

    export class Ability {

        condition: ECondition;

        onCreate() {

        }

        onInit() {

        }

        onPlaying() {

        }

        onPlayed() {

        }

        onRemove() {

        }

    }

}
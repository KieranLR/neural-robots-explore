import GameObject from "./../GameObject";
import Transform from "../../GameComponents/Transform";
import Sprite from "../../GameComponents/Sprite"
import {simplexFilterIndividual} from "../../Filters/simplexNoiseIndividual";
import transparentFilter from "../../Filters/basicShader";
import * as PIXI from "pixi.js";
import RenderedFilter from "../../GameComponents/RenderedFilter";
import FilteredSprite from "../../GameComponents/FilteredSprite";
import {setNotes} from "../../../Redux/actions";


export default class Note extends GameObject {
    constructor(game, note,setNoteDispatch ,collected){
        super();
        this.game = game;
        this.note = note;
        this.collected = collected;
        this.components = {};
        this.setNoteDispatch = setNoteDispatch;
    }

    init() {
        this.components.transform = new Transform();
        this.components.transform.pos.x = this.note.location.x;
        this.components.transform.pos.y = this.note.location.y;

        this.components.sprite = new Sprite(this.game, this, "hunter");
        super.init();
        this.components.sprite.sprite.on('mousedown', () => this.setNote({}));
        this.components.sprite.sprite.on('touchstart', () => this.setNote({}));
        this.components.sprite.sprite.on('mouseover', () => this.components.sprite.sprite.alpha = 1);
        this.components.sprite.sprite.width = 100;
        this.components.sprite.sprite.height = 100;
        this.components.sprite.sprite.alpha = 0;
        this.components.sprite.sprite.interactive = true;

        this.components.sprite.sprite.buttonMode= true;
        this.components.transform.rotation = -Math.PI / 2;
        this.components.sprite.sprite.cursor = 'pointer';
    }

    update() {
        super.update();
        if (this.components.sprite.sprite.alpha >= 0.2) {
            this.components.sprite.sprite.alpha -= 0.005;
        }
    }

    setNote() {
        this.setNoteDispatch({});
    }

}
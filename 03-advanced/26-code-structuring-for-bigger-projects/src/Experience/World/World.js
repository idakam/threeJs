import * as THREE from "three";
import Experience from "../Experience.js";
import Environment from "./Environment.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    //Test mesh
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial()
    );

    this.scene.add(testMesh);

    this.environment = new Environment();
    //wait for resources
    // this.resources.on("ready", () => {
    //   //SetUp
    //   this.environment = new Environment();
    // });
  }
}

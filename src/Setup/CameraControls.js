import React, { useEffect, useRef, useState } from "react";
import { PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Raycaster, SpriteMaterial, Vector3 } from "three";
import Plate from "../helpers/plate";
import SpriteComponent from "../helpers/SpriteComponent";

import {
  openProfileTab,
  openProjectGithub,
  openProjectTab,
} from "../helpers/helpers";
import Track from "../Game/Track";
import gsap from "gsap";
import Game from "../Game";

const CameraControls = ({ icon, squidDoll }) => {
  const [show, setShow] = useState(false);
  const [ascend, setAscend] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [obj, setObj] = useState(null);
  const [visit, setVisit] = useState(null);
  const [contact, setContact] = useState(null);
  let failed = false;
  const z = 79;
  const z_sub = 8;

  useEffect(() => {
    const startOp = async (game) => {
      if (!game) return;
      gsap.to(group.current.rotation, { y: 0, duration: 0.45 });
      await delay(Math.random() * 1000 + 1000);
      gsap.to(group.current.rotation, { y: Math.PI, duration: 0.45 });
      await delay(Math.random() * 750 + 750);
      startOp(!failed);
    };

    startOp(startGame);
  }, [startGame, failed]);

  let moveForward = false;
  let moveBackward = false;
  let moveLeft = false;
  let moveRight = false;
  let canJump = false;
  const controlsRef = useRef(null);
  const objects = [];
  let raycaster;
  const group = useRef(null);
  const weather = useRef(null);
  const expense = useRef(null);
  const meetup = useRef(null);
  const movieBase = useRef(null);
  const reactMeal = useRef(null);
  const onlineStore = useRef(null);
  const cc = useRef(null);
  const hr = useRef(null);
  const arrow = useRef(null);
  const arrow1 = useRef(null);
  const contactRef = useRef(null);
  const track = useRef(null);
  const play = useRef(null);
  const end = useRef(null);
  let onObject = [];

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  let prevTime = 0;
  const velocity = new Vector3();
  const direction = new Vector3();

  const onKeyDown = function (event) {
    if (!startGame) {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          moveForward = true;
          break;

        case "ArrowLeft":
        case "KeyA":
          moveLeft = true;
          break;

        case "ArrowDown":
        case "KeyS":
          moveBackward = true;
          break;

        case "ArrowRight":
        case "KeyD":
          moveRight = true;
          break;

        case "Space":
          if (canJump === true) velocity.y += 350;
          canJump = false;
          break;
        case "ShiftLeft":
          velocity.x *= 12;
          velocity.z *= 12;
          break;

        default:
          break;
      }
    } else {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          if (group.current.rotation.y === 0) {
            setStartGame(false);
            failed = true;
            controlsRef.current.camera.position.x = 100;
            controlsRef.current.camera.position.z = 40;
          } else moveForward = true;
          break;

        case "ArrowDown":
        case "KeyS":
          if (group.current.rotation.y === 0) {
            setStartGame(false);
            failed = true;
            controlsRef.current.camera.position.x = 100;
            controlsRef.current.camera.position.z = 40;
          } else moveBackward = true;
          break;
        default:
          return;
      }
    }
  };

  const onKeyUp = function (event) {
    switch (event.code) {
      case "ArrowUp":
      case "KeyW":
        moveForward = false;
        break;
      case "ArrowLeft":
      case "KeyA":
        moveLeft = false;
        break;
      case "ArrowDown":
      case "KeyS":
        moveBackward = false;
        break;
      case "ArrowRight":
      case "KeyD":
        moveRight = false;
        break;
      case "ShiftLeft":
        velocity.x /= 12;
        velocity.z /= 12;
        break;
      default:
        break;
    }
  };

  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);
  document.addEventListener("keypress", (e) => {
    switch (e.code) {
      case "KeyF":
        setAscend(!ascend);
        onObject = [];
        break;
      default:
        break;
    }
    if (onObject[0]) {
      switch (e.code) {
        case "KeyE":
          openProfileTab(cc, hr, onObject[0]);
          break;
        case "KeyV":
          openProjectTab(
            weather,
            expense,
            movieBase,
            reactMeal,
            onlineStore,
            meetup,
            onObject[0]
          );
          break;
        case "KeyG":
          openProjectGithub(
            weather,
            expense,
            movieBase,
            reactMeal,
            onlineStore,
            meetup,
            onObject[0]
          );
          break;
        case "KeyB":
          if (onObject[0].object?.uuid === weather.current.uuid)
            setObj("weather");
          if (onObject[0].object?.uuid === expense.current.uuid)
            setObj("expense");
          if (onObject[0].object?.uuid === movieBase.current.uuid)
            setObj("movieBase");
          if (onObject[0].object?.uuid === onlineStore.current.uuid)
            setObj("onlineStore");
          if (onObject[0].object?.uuid === meetup.current.uuid)
            setObj("meetup");
          if (onObject[0].object?.uuid === reactMeal.current.uuid)
            setObj("reactMeal");
          break;
        default:
          setObj(null);
          break;
      }
    }
  });
  const welcome = document.getElementById("selector");
  const canvas = document.getElementById("canvas");

  raycaster = new Raycaster(new Vector3(), new Vector3(0, -1, 0), 0, 10);

  useFrame(({ clock }) => {
    // Adding all the plates ref to an array which will be used to check intersection of raycaster with plates.
    !objects.includes(weather.current) && objects.push(weather.current);
    !objects.includes(expense.current) && objects.push(expense.current);
    !objects.includes(meetup.current) && objects.push(meetup.current);
    !objects.includes(movieBase.current) && objects.push(movieBase.current);
    !objects.includes(reactMeal.current) && objects.push(reactMeal.current);
    !objects.includes(onlineStore.current) && objects.push(onlineStore.current);

    !objects.includes(cc.current) && objects.push(cc.current);
    !objects.includes(hr.current) && objects.push(hr.current);
    !objects.includes(contactRef.current) && objects.push(contactRef.current);
    !objects.includes(play.current) && objects.push(play.current);
    !objects.includes(end.current) && objects.push(end.current);

    //showing welcome page on locking and unlocking of controls
    controlsRef.current.addEventListener("lock", () => {
      welcome.style.display = "none";
      canvas.style.display = "block";
    });
    controlsRef.current.addEventListener("unlock", function () {
      welcome.style.display = "flex";
      canvas.style.display = "none";
    });

    // Moving raycaster around with change of camera location
    raycaster.ray.origin.copy(controlsRef.current.getObject().position);
    // check if raycaster intersected with any of the plates
    onObject = raycaster.intersectObjects(objects);

    // conditionally setting sprites based on the type of plate that the camera has interacted with.
    // eg: show different sprite for profile links and project links. Also redirect to contact form when going through portal
    if (
      onObject.length > 0 &&
      onObject[0].object &&
      (onObject[0].object.uuid === cc.current.uuid ||
        onObject[0].object.uuid === hr.current.uuid)
    )
      setVisit(true);
    else setVisit(false);
    if (
      onObject.length > 0 &&
      onObject[0].object &&
      onObject[0].object.uuid === contactRef.current.uuid
    ) {
      contact && window.open("/contact", "contact");
      setContact(false);
    } else {
      setContact(true);
    }
    setShow(
      onObject.length > 0 &&
        onObject[0].object.uuid !== contactRef.current.uuid &&
        onObject[0].object.uuid !== play.current.uuid &&
        onObject[0].object.uuid !== end.current.uuid
    );
    if (onObject.length > 0 && onObject[0].object.uuid === play.current.uuid) {
      setStartGame(true);
      failed = false;
    }

    if (onObject.length > 0 && onObject[0].object.uuid === end.current.uuid) {
      setStartGame(false);
      failed = true;
    }
    // Getting the delta time to change location of camera.
    const elapsedTime = clock.getElapsedTime();
    const delta = elapsedTime - prevTime;
    prevTime = elapsedTime;

    // Animating pointing arrows
    if (arrow.current) {
      arrow.current.position.y += Math.sin(elapsedTime * 10) * 0.1;
    }
    if (arrow1.current) {
      arrow1.current.position.y += Math.sin(elapsedTime * 10) * 0.1;
    }

    // Reducing speed of camera with frames to give more realistic motion effect.
    velocity.x -= velocity.x * delta * 3.5;
    velocity.z -= velocity.z * delta * 3.5;
    velocity.y -= 9.8 * 100 * delta; // 100.0 = mass

    // Change direction based on the keys pressed by user
    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize();

    // Movement controls for FPS specified in Three.js Docs.
    if (moveForward || moveBackward) velocity.z -= direction.z * 50 * delta;
    if (moveLeft || moveRight) velocity.x -= direction.x * 50 * delta;
    controlsRef.current.moveRight(-velocity.x * delta);
    controlsRef.current.moveForward(-velocity.z * delta);

    // Increasing height on pressing F key
    if (!ascend)
      controlsRef.current.getObject().position.y += velocity.y * delta;
    else controlsRef.current.getObject().position.y = 40; // new behavior

    // bringing user back to plane after jump limit reached.
    if (controlsRef.current.getObject().position.y < 10) {
      velocity.y = 0;
      controlsRef.current.getObject().position.y = 5;
      canJump = true;
    }

    // Teleporting user back to middle of plane of goes out of boundary.
    if (
      controlsRef.current.getObject().position.x > 200 ||
      controlsRef.current.getObject().position.z > 200 ||
      controlsRef.current.getObject().position.x < -200 ||
      controlsRef.current.getObject().position.z < -200
    ) {
      controlsRef.current.getObject().position.x = 0;
      controlsRef.current.getObject().position.z = 25;
    }
  });

  const material = new SpriteMaterial({ map: icon });
  // Unlock controls
  // controlsRef.current &&
  //   window.addEventListener("touchstart", (e) => {
  //     controlsRef.current.lock();
  //   });

  return (
    <>
      <PointerLockControls ref={controlsRef} selector="#selector" />
      <Plate ref={weather} position={[-120 + 10, 0.01, -10]} />
      <Plate ref={expense} position={[-60 - 10, 0.01, -40]} />
      <Plate ref={movieBase} position={[-120 + 10, 0.01, -70]} />
      <Plate ref={reactMeal} position={[-60 - 10, 0.01, -140]} />
      <Plate ref={onlineStore} position={[-120 + 10, 0.01, -140]} />
      <Plate ref={meetup} position={[-80 - 10, 0.01, -160]} />
      <Track position={[100, 0.01, -45]} ref={track} show={startGame} />
      <Game position={[100, 5, -100]} ref={group} squidDoll={squidDoll} />

      <Plate
        position={[100, 0.015, 0]}
        ref={play}
        args={[30, 10]}
        color="#c2ba69"
      />
      <Plate
        position={[100, 0.015, -90]}
        ref={end}
        args={[30, 10]}
        color="#c2ba69"
      />
      {[hr, cc].map((ref, index) => (
        <Plate
          key={index}
          ref={ref}
          position={[-3, 0.01, z - z_sub * index]}
          args={[5, 5]}
        />
      ))}
      <Plate ref={contactRef} position={[0, 0.5, -8]} args={[5, 5]} />
      {show ? (
        visit ? (
          <SpriteComponent controlsRef={controlsRef} type="links" />
        ) : (
          <SpriteComponent controlsRef={controlsRef} obj={obj} />
        )
      ) : (
        <>
          <sprite
            material={material}
            position={[-120 + 10, 10, -10]}
            scale={[10, 10, 10]}
            ref={arrow}
          />
          <sprite
            material={material}
            position={[-3, 10, z - z_sub * 1]}
            scale={[10, 10, 10]}
            ref={arrow1}
          />
        </>
      )}
    </>
  );
};

export default CameraControls;

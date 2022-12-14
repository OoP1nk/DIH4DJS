/**
 * DIH4DJS is a power package to handle interactions using 
 * the discord.js library.
 * Copyright (C) 2022  OoP1nk
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */
import type { DIH4DJS } from "../DIH4DJS";
import EventListener from "../structures/EventListener";
import { Events } from "discord.js";

/**
 * ClientReady event listener.
 * @since v1.0
 */
class onReady extends EventListener {
    constructor() {
        super(Events.ClientReady);
    }

    onExecute(dih4djs: DIH4DJS): void {
        if(dih4djs.packages === null) return;
        if(dih4djs.isRegisterOnReady && dih4djs.interactionManager !== null) {
            dih4djs.registerInteractions();
        }
    }
}

export default onReady;
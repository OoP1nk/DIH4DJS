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
import { DIH4DJS } from "../DIH4DJS";
import type { Client } from "discord.js";
import type { ExecutableCommand } from "./ExecutableCommand";
import { RestrictedCommand, CommandOptions } from "./RestrictedCommand";

/**
 * @since v1.0
 */
export abstract class BaseApplicationCommand<E, T> extends RestrictedCommand implements ExecutableCommand<E> {
    private data!: T;

    constructor(data: any, options?: CommandOptions) {
        super({
            ...BaseApplicationCommand.createDefault(),
            ...options
        });
        this.data = (data as T);
    }

    /**
     * Sets the command data.
     * @param data The desired command builder
     */
    public setCommandData(data: any) {
        this.data = (data as T);
    }

    /**
     * Gets the command data.
     * @returns The command builder
     */
    public getCommandData(): T {
        return this.data;
    }

    /**
     * Creates the default options for an {@link AppCommand}.
     * @returns The default command options
     * @since v1.1
     */
    static createDefault(): CommandOptions {
        return {
            registrationType: DIH4DJS.defaultRegistrationType,
            cooldown: 0,
            components: {}
        }
    }

    execute(_client: Client, _interaction: E): void {}
}
import { Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
export interface Theme {
	name: string;
	properties: any;
}

export const suku: Theme = {
	name: 'suku',
	properties: {
		'--suku-primary-font': `'Poppins', sans-serif`,
		'--suku-secondary-font': `'Encode Sans', sans-serif`,
		'--suku-primary-color': '#a7bf2e',
		'--suku-secondary-color': '#d8fc40',
		'--suku-bg-primary': '#2f2e2e',
		'--suku-bg-secondary': '#272727',
		'--suku-text-heading': '#1d1d1d',
		'--suku-text-sub-heading': '#cccccc',
		'--suku-text-label-one': '#b6b6b6',
		'--suku-text-label-two': '#ffffff',
		'--suku-text-label-three': '#f2f2f2',
		'--suku-text-link': '#3e3e3e',
		'--suku-text-info': '#757575',
		'--suku-primary-border-color': '#a7bf2e',
		'--suku-secondary-border-color': '#757575',
		'--suku-primary-border-radius': '0 40px 0 0',
		'--suku-default-border-radius': '0px',
		'--suku-filter-bg': '#ffffff',
		'--suku-filter-label': '#b6b6b6',
		'--suku-filter-label-selected': 'black'
	}
};

export const dark: Theme = {
	name: 'dark',
	properties: {
		'--suku-primary-font': `'Poppins', sans-serif`,
		'--suku-secondary-font': `'Encode Sans', sans-serif`,
		'--suku-primary-color': '#363b4e',
		'--suku-secondary-color': '#d8fc40',
		'--suku-bg-primary': '#363b4e',
		'--suku-bg-secondary': '#272727',
		'--suku-text-heading': '#1d1d1d',
		'--suku-text-sub-heading': '#f2f2f2',
		'--suku-text-label-one': '#b6b6b6',
		'--suku-text-label-two': '#ffffff',
		'--suku-text-label-three': '#f2f2f2',
		'--suku-text-link': '#3e3e3e',
		'--suku-text-info': '#757575',
		'--suku-primary-border-color': '#f2f2f2',
		'--suku-secondary-border-color': '#757575',
		'--suku-primary-border-radius': '0',
		'--suku-default-border-radius': '0px 20px 15px',
		'--suku-filter-bg': 'black',
		'--suku-filter-label': '#b6b6b6',
		'--suku-filter-label-selected': '#ffffff'
	}
};

export const light: Theme = {
	name: 'light',
	properties: {
		'--suku-primary-font': `'Source Sans Pro', sans-serif`,
		'--suku-secondary-font': `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
		'--suku-primary-color': '#a7bf2e',
		'--suku-secondary-color': '#b3b3b3',
		'--suku-bg-primary': '#a6c36f',
		'--suku-bg-secondary': '#282828',
		'--suku-text-heading': '#1d1d1d',
		'--suku-text-sub-heading': '#1d1d1d',
		'--suku-text-label-one': '#b6b6b6',
		'--suku-text-label-two': 'black',
		'--suku-text-label-three': '#f2f2f2',
		'--suku-text-link': '#3e3e3e',
		'--suku-text-info': '#757575',
		'--suku-primary-border-color': '#151515',
		'--suku-secondary-border-color': '#757575',
		'--suku-primary-border-radius': '0px 15px 10px 0px',
		'--suku-default-border-radius': '10px 10px 20px 5px'
	}
};

@Injectable({
	providedIn: 'root'
})
export class SukuGovernanceWebcomponentsService {
	private active: Theme = suku;
	public dialogWidth;
	public dialogHeight;

	constructor(public dialogService: MatDialog) {
		this.dialogHeight = 'auto';
		this.dialogWidth = '640px';
	}

	public setLightTheme(): void {
		this.setActiveTheme(light);
	}

	public setDarkTheme(): void {
		this.setActiveTheme(dark);
	}

	public setSukuTheme(): void {
		console.log('suku');
		this.setActiveTheme(suku);
	}

	private setActiveTheme(theme: Theme): void {
		this.active = theme;
		Object.keys(this.active.properties).forEach((property) => {
			document.documentElement.style.setProperty(property, this.active.properties[property]);
		});
	}
}

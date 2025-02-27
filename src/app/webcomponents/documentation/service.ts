import { Injectable } from '@angular/core';
export interface WebCompProperties {
	data: WebCompData[];
}
export interface WebCompData {
	properties: string;
	type: string;
	description: string;
}
export interface WebCompContent {
	title: string;
	description: string;
	properties: any;
	codeSample: any;
	jsonSample: any;
	usage: any;
	try: boolean;
	id: number;
	preview?: boolean;
	previewRadio?: boolean;
}
@Injectable({
	providedIn: 'root'
})
export class WebComponentsServices {
	/* define properties for each webcomponents */
	public Properties_DATA: WebCompProperties[] = [
		{
			data: []
		},
		{
			data: [
				{
					properties: 'size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{ properties: 'weight', type: '[Number]', description: 'Weight corresponds to the font size.' },
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'user-name',
					type: '[String]',
					description: 'it represents the below username.'
				},
				{ properties: 'name-weight', type: '[Number]', description: 'Weight corresponds to the font size.' },
				{
					properties: 'name-customclass ',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet'
				},
				{
					properties: 'name-size',
					type: '[String]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'name-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'account-type',
					type: '[String]',
					description:
						'A manufacturer  provides goods or services relating to the item being designed, typically prototype or production components.'
				},
				{
					properties: 'account-size',
					type: '[Number]',
					description: 'Corresponds to the value of size which is passed to the directive.'
				},
				{
					properties: 'account-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'account-customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'users',
					type: '[String]',
					description: 'The user are the end-users who can be buyer or seller.'
				},
				{
					properties: 'comment-size',
					type: '[String]',
					description:
						'The comment-size describes how large or small the user shares his feedback about the product and transactions.'
				},
				{
					properties: 'comment-weight',
					type: '[String]',
					description: ' The comment-weight corresponds to the font size of the comment-size.'
				},
				{
					properties: 'comment-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'comment',
					type: '[String]',
					description:
						'A product description is the marketing copy used to describe a product value proposition to potential customers.'
				},
				{
					properties: 'rating-value',
					type: '[String]',
					description: ' Rating value shows the users feedback about the product .'
				}
			]
		},

		{
			data: [
				{
					properties: 'id',
					type: '[String]',
					description: 'If you need to support more than one instance of notification  at a time.'
				},
				{
					properties: 'notification-title',
					type: '[String]',
					description: 'It represents the name of the specific notification. This is submitted with the form data.'
				},
				{
					properties: 'notification-value ',
					type: '[Number]',
					description: '  It shows the value of its corresponing title.'
				}
			]
		},
		{
			data: [
				{
					properties: 'name',
					type: '[String]',
					description: 'it represents the mail id of a user. Example: username@mail.com'
				},
				{
					properties: 'size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'bid',
					type: '[Number]',
					description: 'A bid is an offer made by an investor, trader or dealer to buy a product.'
				},
				{
					properties: 'bid-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'bid-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'bid-color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading',
					type: '[String]',
					description: ' Bid-heading is also sometimes referred to as advance bidding or pre-bidding to end users.'
				},
				{
					properties: 'bid-heading-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'bid-heading-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'percent',
					type: '[String]',
					description: 'To determine the strength of a bid.'
				},
				{
					properties: 'percent-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'percent-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'percent-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'percent-heading',
					type: '[String]',
					description: 'It allows to determine exactly which demand sources are participating.'
				},
				{
					properties: 'percent-heading-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'percent-heading-color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'percent-heading-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				}
			]
		},
		{
			data: [
				{
					properties: 'image',
					type: '[Number]',
					description: '	An image is a picture that has been created or copied and stored in electronic form.'
				},
				{
					properties: 'match',
					type: '[Number]',
					description: 'Corresponds to the match for users listing and interest.'
				},
				{
					properties: 'list-name-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'list-color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'list-weight',
					type: '[String]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'list-name',
					type: '[Number]',
					description: 'Corresponds to the name for each list.'
				},
				{
					properties: 'prize',
					type: '[Number]',
					description: 'Corresponds to the value given to the matched listing of the product.'
				},
				{
					properties: 'prize-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'prize-weight ',
					type: '[String]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'prize-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'prize-customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'date',
					type: '[Number]',
					description: 'Date corresponds to listing expiry date.'
				},
				{
					properties: 'date-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'date-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'date-color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'date-customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'dateV',
					type: '[Number]',
					description: 'The dateV corresponds to the date value of listing a product.'
				},
				{
					properties: 'dateV-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'dateV-color',
					type: '[Number]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'dateV-weight',
					type: '[String]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'dateV-costomclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'sell',
					type: '[Number]',
					description: 'The seller details who sell the product.'
				},
				{
					properties: 'sell-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'sell-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'sell-color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'sell-customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'sell-v',
					type: '[String]',
					description: 'Corresponds to the seller value name.'
				},
				{
					properties: 'sell-v-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'sell-v-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'sell-v-color',
					type: '[Number]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'sell-v-customclass ',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'image',
					type: '[String]',
					description: ' An image is a picture that has been created or copied and stored in electronic form.'
				},
				{
					properties: 'chat-read-icon',
					type: '[String]',
					description: 'The  check mark will appear when all participants in the group have received your message.'
				},
				{
					properties: 'chat-unread-icon',
					type: '[String]',
					description: 'The message counts next to the  icon to be read.'
				},
				{
					properties: 'msg-status',
					type: '[String]',
					description: ' It conveys the current status of the message.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'custom-icon-class',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'bg-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'title-one ',
					type: '[String]',
					description: 'It displays list name.'
				},
				{
					properties: 'title-one-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'title-one-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'title-one-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'content-one',
					type: '[String]',
					description: 'It allows the users to determine exactly which demand sources are participating.'
				},
				{
					properties: 'content-one-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'content-one-weight',
					type: '[String]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'content-one-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'sub-title-two',
					type: '[String]',
					description: 'It displays seller name.'
				},
				{
					properties: 'sub-title-two-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'sub-title-two-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'sub-title-two-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'sub-title-three',
					type: '[Number]',
					description: 'It displays the date status.'
				},
				{
					properties: 'sub-title-three-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'sub-title-three-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'sub-title-three-size',
					type: '[String]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'content-three',
					type: '[String]',
					description: 'It displays date.'
				},
				{
					properties: 'content-three-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'content-three-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'content-three-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				}
			]
		},
		{
			data: [
				{
					properties: 'user-name',
					type: '[String]',
					description: ' It represents the below username.'
				},
				{
					properties: 'image',
					type: '[String]',
					description: ' An image is a picture that has been created or copied and stored in electronic form.'
				},
				{
					properties: 'icon',
					type: '[String]',
					description: ' It helps the user quickly identify the type of file represented by the icon.'
				},
				{
					properties: 'title-one ',
					type: '[String]',
					description: 'Titleone contains descriptive keywords to clearly and accurately convey the contents.'
				},
				{
					properties: 'title-two',
					type: '[String]',
					description: 'If you need to support more than one instance of title  at a time .'
				},
				{
					properties: 'action-one',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'action-two',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'name',
					type: '[String]',
					description: ' it represents the below submenu name.'
				},
				{
					properties: 'id',
					type: '[Number]',
					description: ' If you need to support more than one instance of submenu at a time.'
				},
				{
					properties: 'submenulist',
					type: '[array]',
					description: ' [object]={name,id}.'
				}
			]
		},
		{
			data: [
				{
					properties: 'progress-style-one',
					type: '[String]',
					description: ' it represents the progress as completed.'
				},
				{
					properties: 'progress-style-two',
					type: '[Number]',
					description: '  it represents the progress as active.'
				},
				{
					properties: 'progress-style-three',
					type: '[Number]',
					description: ' It represents the progress as upcoming.'
				},
				{
					properties: 'progress-style-four',
					type: '[Number]',
					description: ' It represents the progress as upcoming.'
				},
				{
					properties: 'progress-style-five',
					type: '[Number]',
					description: ' It represents the progress as upcoming .'
				},
				{
					properties: 'first-heading',
					type: '[String]',
					description: 'It represents the below contents.'
				},
				{
					properties: 'second-heading',
					type: '[String]',
					description: ' it represents the below contents.'
				},
				{
					properties: 'third-heading',
					type: '[String]',
					description: 'it represents the below contents.'
				},
				{
					properties: 'fourth-heading',
					type: '[String]',
					description: 'it represents the below contents.'
				},
				{
					properties: 'fifth-heading',
					type: '[String]',
					description: 'it represents the below contents.'
				},
				{
					properties: 'heading-one-id',
					type: '[String]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'heading-two-id',
					type: '[String]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'heading-three-id',
					type: '[String]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'heading-four-id',
					type: '[String]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'heading-five-id',
					type: '[String]',
					description: 'If you need to support more than one instance of title  at a time .'
				},
				{
					properties: 'Custom CSS',
					type: '[String]',
					description:
						'ProgressCompleted- "progressCompleted", ProgressActive-"progressActive", ProgressUpcoming-"progressUpcoming".'
				}
			]
		},
		{
			data: [
				{
					properties: 'size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'action',
					type: '[String]',
					description: ' The response when the link is navigated to the required page or content.'
				}
			]
		},
		{
			data: [
				{
					properties: 'title',
					type: '[String]',
					description: ' it represents the contents below.'
				},
				{
					properties: 'size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'options',
					type: '[String]',
					description: ' Specifies that the user is required to select a value before submitting the form.'
				}
			]
		},
		{
			data: [
				{
					properties: 'number',
					type: '[String]',
					description: ' String of specific numbers that a telephone or cell phone user can dial to reach the end user.'
				},
				{
					properties: 'size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'name',
					type: '[String]',
					description: ' element identifies contact information relevant to the current site.'
				},
				{
					properties: 'size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'name',
					type: '[String]',
					description: 'it guides the end user to select the required optiion.'
				},
				{
					properties: 'size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: ' It performs required actions.'
				}
			]
		},
		{
			data: [
				{
					properties: 'name',
					type: '[String]',
					description: 'It represents the contents below.'
				},
				{
					properties: 'id',
					type: '[Number]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bgcolor',
					type: '[String]',
					description: 'The background-color CSS property sets the background color of an element.'
				},
				{
					properties: 'routerlink',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'status-types-dynamic ',
					type: '[array]',
					description: ' statustypes dynamic are used for fields that can take predefined values, such as check-boxes.'
				}
			]
		},
		{
			data: [
				{
					properties: 'id',
					type: '[Number]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'size',
					type: '[Number-rem]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'disable-value ',
					type: '[boolean]',
					description:
						'It is used alter enable/disable states of button.'
				},
				{
					properties: 'custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for info button'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'id',
					type: '[Number]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'size',
					type: '[Number-rem]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'disable-value',
					type: '[boolean]',
					description:
						'It is used to enable/disable states of button.'
				},
				{
					properties: 'custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for primary button'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: ' It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'id',
					type: '[Number]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'size',
					type: '[Number-rem]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for secondary button'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: ' It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'id',
					type: '[Number]',
					description: 'If you need to support more than one instance of title  at a time.'
				},
				{
					properties: 'size',
					type: '[Number-rem]',
					description: ' It is used to update font-size.'
				},
				{
					properties: 'color',
					type: '[String]',
					description: ' It is used to update font-color.'
				},
				{
					properties: 'weight',
					type: '[Number]',
					description: ' It is used to update font-weight.'
				},
				{
					properties: 'custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for default button'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: ' It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'icon',
					type: '[String]',
					description: 'It is used to represent the user and can often identify the Scratcher.'
				},
				{
					properties: 'value',
					type: '[Number]',
					description: 'Rating the feeback to the buyer or seller from an end user.'
				}
			]
		},
		{
			data: [
				{
					properties: 'form-radio',
					type: '[String]',
					description: 'The text-box helps the user to enter the search string they require.'
				},
				{
					properties: 'icon',
					type: '[String]',
					description: 'Used to identify the searh box to fetch the required data.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'prize',
					type: '[Number]',
					description: 'The value assigned to the product by a buyer or seller.'
				},
				{
					properties: 'prize-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'prize-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'prize-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value..'
				},
				{
					properties: 'prize-customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'unit',
					type: '[Number]',
					description: 'unit indicates the cost per product or bid placed.'
				},
				{
					properties: 'unit-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'unit-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'unit-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'unit-customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'q-content',
					type: '[String]',
					description: ' The quantity per product in the bid.'
				},
				{
					properties: 'q-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'q-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'q-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value..'
				},
				{
					properties: 'q-customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'p-content',
					type: '[String]',
					description: 'The bids placed for each products  .'
				},
				{
					properties: 'p-size',
					type: '[Number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'p-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'p-color',
					type: '[String]',
					description:
						'The color data type represents a color in the sRGB color space. Color may also include an alpha-channel transparency value..'
				},
				{
					properties: 'p-customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'rating',
					type: '[Number]',
					description: 'The feedback given by the buyer or seller to the product.'
				},
				{
					properties: 'customclass',
					type: '[String]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'value',
					type: '[Number]',
					description: ' The rating value feedback in terms of star to the product.'
				}
			]
		},
		{
			data: [
				{
					properties: 'progress-style-one',
					type: '[String]',
					description: 'It shows the progress in completed state.'
				},
				{
					properties: 'progress-style-two',
					type: '[String]',
					description: 'It shows the progress as active.'
				},
				{
					properties: 'progress-style-three',
					type: '[String]',
					description: ' It shows the progress as upcoming.'
				},
				{
					properties: 'heading-one',
					type: '[String]',
					description: 'It represents the different categories of tracking.'
				},
				{
					properties: 'heading-two',
					type: '[String]',
					description: 'It represents the different categories of tracking.'
				},
				{
					properties: 'heading-three',
					type: '[String]',
					description: 'It represents the different categories of tracking.'
				},
				{
					properties: 'custom-heading-one-class',
					type: '[String]',
					description: 'It differentiates the categories with the color indications.'
				},
				{
					properties: 'custom-heading-two-class',
					type: '[String]',
					description: 'It differentiates the categories with the color indications.'
				},
				{
					properties: 'custom-heading-three-class',
					type: '[String]',
					description: ' It differentiates the categories with the color indications.'
				}
			]
		},
		{
			data: [
				{
					properties: 'head-name',
					type: '[String]',
					description: 'It corresponds to product title.'
				},
				{
					properties: 'sub-head-name',
					type: '[String]',
					description: 'It corresponds to product sub-title.'
				},
				{
					properties: 'name',
					type: '[Input]',
					description: 'It corresponds to type of search in the widget.'
				},
				{
					properties: 'control',
					type: '[Input]',
					description: 'It holds the formcontrolname in the widget.'
				},
				{
					properties: '[form]',
					type: '[Input]',
					description: 'It holds the formgroup name.'
				},
				{
					properties: 'searchFun',
					type: '[Output]',
					description: 'It prompts the user to find the required product.'
				},
				{
					properties: 'selectproducts',
					type: '[Output]',
					description: 'It prompts the user to find the product.'
				},
				{
					properties: 'searchByProduct',
					type: '[Output]',
					description: 'Users can locate product by searching for specific words or phrases.'
				},
				{
					properties: 'traceproduct',
					type: '[Output]',
					description:
						'traceproduct refers to the capability for tracing products along the distribution chain on a batch number.'
				},
				{
					properties: 'disabledBtn',
					type: '[Output]',
					description: 'It corresponds to the button which is disableds before the details is filled.'
				},
				{
					properties: 'productdetails',
					type: '[Output]',
					description: 'It shows the complete track details of the product required.'
				},
				{
					properties: 'result',
					type: '[Output]',
					description: 'It is a short summary of the search, links to more detailed analysis.'
				},
				{
					properties: 'visible',
					type: '[Output]',
					description: 'Corresponds to the products allowed to be visible in the tracking.'
				}
			]
		},
		{
			data: [
				{
					properties: 'tree-data',
					type: '[Array]',
					description: 'It holds the parent/child JSON Data of the products.'
				}
			]
		},
		{
			data: [
				{
					properties: 'title',
					type: '[String]',
					description: 'It corresponds to ACH title.'
				},
				{
					properties: 'titleId',
					type: '[String]',
					description: 'It defines Id corresponds to ACH title.'
				},
				{
					properties: 'titleCustomClass',
					type: '[String]',
					description: 'It defines customClass for ACH title.'
				},
				{
					properties: 'subTitle',
					type: '[String]',
					description: 'It corresponds to ACH subtitle.'
				},
				{
					properties: 'subTitleId',
					type: '[String]',
					description: 'It defines Id corresponds to ACH subtitle.'
				},
				{
					properties: 'subTitleCustomClass',
					type: '[String]',
					description: 'It defines customClass for ACH subtitle.'
				},
				{
					properties: 'LabelOne',
					type: '[String]',
					description: 'It defines status of the customer.'
				},
				{
					properties: 'LabelOneId',
					type: '[String]',
					description: 'It defines Id corresponds to LabelOne.'
				},
				{
					properties: 'LabelOneCustomClass',
					type: '[String]',
					description: 'It defines customClass for LabelOne.'
				},
				{
					properties: 'labelTwo',
					type: '[String]',
					description: 'It defines status of the beneficial owner.'
				},
				{
					properties: 'labelTwoId',
					type: '[String]',
					description: 'It defines Id corresponds to labelTwo.'
				},
				{
					properties: 'labelTwoCustomClass',
					type: '[String]',
					description: 'It defines customClass for labelTwo.'
				},
				{
					properties: 'labelThree',
					type: '[String]',
					description: 'It defines status of the beneficial owner.'
				},
				{
					properties: 'labelThreeId',
					type: '[String]',
					description: 'It defines Id corresponds to labelThree.'
				},
				{
					properties: 'labelThreeCustomClass',
					type: '[String]',
					description: 'It defines customClass for labelThree.'
				},
				{
					properties: 'labelFour',
					type: '[String]',
					description: 'It defines the status of document upload.'
				},
				{
					properties: 'labelFourId',
					type: '[String]',
					description: 'It defines Id corresponds to labelFour.'
				},
				{
					properties: 'labelFourCustomClass',
					type: '[String]',
					description: 'It defines customClass for labelFour.'
				},
				{
					properties: 'labelFive',
					type: '[String]',
					description: 'It provides the information regarding document upload.'
				},
				{
					properties: 'labelFiveId',
					type: '[String]',
					description: 'It defines Id corresponds to labelFive.'
				},
				{
					properties: 'labelFiveCustomClass',
					type: '[String]',
					description: 'It defines customClass for labelFive.'
				},
				{
					properties: 'labelSix',
					type: '[String]',
					description: 'It provides the information regarding document upload.'
				},
				{
					properties: 'labelSixId',
					type: '[String]',
					description: 'It defines Id corresponds to labelSix.'
				},
				{
					properties: 'labelSixCustomClass',
					type: '[String]',
					description: 'It defines customClass for labelSix.'
				},
				{
					properties: 'labelSeven',
					type: '[String]',
					description: 'It defines the document status.'
				},
				{
					properties: 'labelSevenId',
					type: '[String]',
					description: 'It defines Id corresponds to labelSeven.'
				},
				{
					properties: 'labelSevenCustomClass',
					type: '[String]',
					description: 'It defines customClass for labelSeven.'
				},
				{
					properties: 'labelEight',
					type: '[String]',
					description: 'It defines the label for document upload button.'
				},
				{
					properties: 'labelEightId',
					type: '[String]',
					description: 'It defines Id corresponds to labelEight.'
				},
				{
					properties: 'labelEightCustomClass',
					type: '[String]',
					description: 'It defines customClass for labelEight.'
				},
				{
					properties: 'labelNine',
					type: '[String]',
					description: 'It defines the label for beneficial owners list.'
				},
				{
					properties: 'labelNineId',
					type: '[String]',
					description: 'It defines Id corresponds to labelEight.'
				},
				{
					properties: 'labelNineCustomClass',
					type: '[String]',
					description: 'It defines customClass for labelEight.'
				},
				{
					properties: 'labelNine',
					type: '[String]',
					description: 'It defines the label for beneficial owners list.'
				},
				{
					properties: 'labelNineId',
					type: '[String]',
					description: 'It defines Id corresponds to labelEight.'
				},
				{
					properties: 'labelNineCustomClass',
					type: '[String]',
					description: 'It defines customClass for labelEight.'
				},
				{
					properties: 'subContent',
					type: '[String]',
					description: 'It defines the status of customer.'
				},
				{
					properties: 'subContentId',
					type: '[String]',
					description: 'It defines Id corresponds to subContent.'
				},
				{
					properties: 'subContentCustomClass',
					type: '[String]',
					description: 'It defines customClass for subContent.'
				},
				{
					properties: 'buttonLabel',
					type: '[String]',
					description: 'It defines label for button to setup ach payment for customer.'
				},
				{
					properties: 'buttonLabelId',
					type: '[String]',
					description: 'It defines Id corresponds to buttonLabel.'
				},
				{
					properties: 'subContentCustomClass',
					type: '[String]',
					description: 'It defines customClass for subContent.'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: 'It prompts the user to setup the ACH payment.'
				},
				{
					properties: 'upload',
					type: '[Output]',
					description: 'It a prompts the user to upload beneficial owner documents.'
				}
			]
		},
		{
			data: [
				{
					properties: 'typeId',
					type: '[String]',
					description: 'It corresponds to Transaction Type table header ID.'
				},
				{
					properties: 'myAccountId',
					type: '[String]',
					description: 'It corresponds to Transaction Account table header ID.'
				},
				{
					properties: 'CounterpartyId',
					type: '[String]',
					description: 'It corresponds to Transaction Counter Party table header ID.'
				},
				{
					properties: 'amountId',
					type: '[String]',
					description: 'It corresponds to Transaction Amount table header ID.'
				},
				{
					properties: 'statusId',
					type: '[String]',
					description: 'It corresponds to Transaction Status table header ID.'
				},
				{
					properties: 'dateCreatedId',
					type: '[String]',
					description: 'It corresponds to Transaction Date table header ID.'
				},
				{
					properties: 'paymentManagementId',
					type: '[String]',
					description: 'It corresponds to Transaction payment Management table header ID.'
				},
				{
					properties: 'cancel',
					type: '[String]',
					description: 'It corresponds to Transaction payment cancel button text.'
				},
				{
					properties: 'cancelId',
					type: '[String]',
					description: 'It corresponds to Transaction payment cancel button ID.'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: 'It prompts the user to cancel the pending Transaction.'
				}
			]
		},
		{
			data: [
				{
					properties: 'form',
					type: '[String]',
					description: 'It corresponds to FormGroup name.'
				},
				{
					properties: 'title',
					type: '[String]',
					description: 'It corresponds to title.'
				},
				{
					properties: 'countriesList',
					type: '[array]',
					description: 'It holds array of countries provided.'
				},
				{
					properties: 'countrySelect',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'statesList',
					type: '[array]',
					description: 'It holds array of states provided.'
				},
				{
					properties: 'stateSelect',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'content',
					type: '[String]',
					description: 'It holds to content for agreement.'
				},
				{
					properties: 'contentId',
					type: '[String]',
					description: 'It holds to content Id for agreement.'
				},
				{
					properties: 'control',
					type: '[String]',
					description: 'It defines to formcontrolname for checkbox element.'
				},
				{
					properties: 'submit',
					type: '[String]',
					description: 'It corresponds to click action for button.'
				}
			]
		},
		{
			data: [
				{
					properties: 'form',
					type: '[String]',
					description: 'It corresponds to FormGroup name.'
				},
				{
					properties: 'title',
					type: '[String]',
					description: 'It corresponds to title.'
				},
				{
					properties: 'titleClass',
					type: '[String]',
					description: 'It corresponds to custom class for title attribute.'
				},
				{
					properties: 'checkBoxId',
					type: '[String]',
					description: 'It defines Id for checkbox.'
				},
				{
					properties: 'content',
					type: '[String]',
					description: 'It holds to content for agreement.'
				},
				{
					properties: 'contentId',
					type: '[String]',
					description: 'It holds to content Id for agreement.'
				},
				{
					properties: 'control',
					type: '[String]',
					description: 'It defines to formcontrolname for checkbox element.'
				},
				{
					properties: 'formArrayName',
					type: '[String]',
					description: 'It defines to form-array-name for beneficial owner form.'
				},
				{
					properties: 'submit',
					type: '[String]',
					description: 'It corresponds to click action for button.'
				}
			]
		},
		{
			data: [
				{
					properties: 'iav-token',
					type: '[String]',
					description: 'It holds to Instant Account Verification (IAV) token.'
				}
			]
		},
		{
			data: [
				{
					properties: 'icon',
					type: '[String]',
					description: 'It defines the type of icon.'
				},
				{
					properties: 'iconCustomClass',
					type: '[String]',
					description: 'It defines the custom class for icon.'
				},
				{
					properties: 'titleOne',
					type: '[String]',
					description: 'It defines the title for suku-confirmation dialog.'
				},
				{
					properties: 'titleOneId',
					type: '[String]',
					description: 'It defines Id for titleOne in suku-confirmation dialog.'
				},
				{
					properties: 'titleOneCustomClass',
					type: '[String]',
					description: 'It defines the customclass for titleOne.'
				},
				{
					properties: 'titleTwo',
					type: '[String]',
					description: 'It defines the sub-title for suku-confirmation dialog.'
				},
				{
					properties: 'titleTwoCustomClass',
					type: '[String]',
					description: 'It defines the customclass for titleTwo.'
				},
				{
					properties: 'titleOneId',
					type: '[String]',
					description: 'It defines Id for titleTwo in suku-confirmation dialog.'
				},
				{
					properties: 'titleThree',
					type: '[String]',
					description: 'It defines the message for suku-confirmation dialog.'
				},
				{
					properties: 'titleThreeId',
					type: '[String]',
					description: 'It defines Id for titleThree in suku-confirmation dialog.'
				},
				{
					properties: 'titleThreeCustomClass',
					type: '[String]',
					description: 'It defines the customclass for titleThree.'
				},
				{
					properties: 'titleBoxCustomClass',
					type: '[String]',
					description: 'It defines the customclass for title-box.'
				},
				{
					properties: 'buttonLableOne',
					type: '[String]',
					description: 'It defines the name for suku-confirmation dialog button-one.'
				},
				{
					properties: 'buttonLableOneId',
					type: '[String]',
					description: 'It defines Id for buttonLabelOneId in suku-confirmation dialog.'
				},
				{
					properties: 'buttonLableTwo',
					type: '[String]',
					description: 'It defines Id for buttonLabelOneId in suku-confirmation dialog.'
				},
				{
					properties: 'buttonLableTwoId',
					type: '[String]',
					description: 'It defines Id for buttonLabelOneId in suku-confirmation dialog.'
				},
				{
					properties: 'buttonCustomClass',
					type: '[String]',
					description: 'It defines Id for buttonLabelOneId in suku-confirmation dialog.'
				}
			]
		},
		{
			data: [
				{
					properties: 'label-one',
					type: '[String]',
					description: 'It defines main heading.'
				},
				{
					properties: 'label-one-Id',
					type: '[String]',
					description: 'It defines Id corresponding to labelOne.'
				},
				{
					properties: 'label-two',
					type: '[String]',
					description: 'It defines sub heading.'
				},
				{
					properties: 'label-two-Id',
					type: '[String]',
					description: 'It defines Id corresponding to labelTwo.'
				},
				{
					properties: 'content-one',
					type: '[String]',
					description: 'It defines serial number.'
				},
				{
					properties: 'content-on-Id',
					type: '[String]',
					description: 'It defines Id corresponding to contentOne.'
				},
				{
					properties: 'contentOneClass',
					type: '[String]',
					description: 'It defines custom class for contentOne.'
				},
				{
					properties: 'content-two',
					type: '[String]',
					description: 'It defines expiry in block numbers.'
				},
				{
					properties: 'content-two-Id',
					type: '[String]',
					description: 'It defines Id corresponding to contentTwo.'
				},
				{
					properties: 'content-two-class',
					type: '[String]',
					description: 'It defines custom class corresponding to contentTwo.'
				},
				{
					properties: 'content-three',
					type: '[String]',
					description: 'It defines status of proposal.'
				},
				{
					properties: 'content-three-Id',
					type: '[String]',
					description: 'It defines Id corresponding to contentThree.'
				}
			]
		},
		{
			data: [
				{
					properties: 'form',
					type: '[String]',
					description: 'It defines FormGroup name.'
				},
				{
					properties: 'labelOne',
					type: '[String]',
					description: 'It defines filter heading.'
				},
				{
					properties: 'labelOneSize',
					type: '[String]',
					description: 'It defines font-size for filter heading.'
				},
				{
					properties: 'labelOneCustomClass',
					type: '[String]',
					description: 'It defines customclass for filter heading.'
				},
				{
					properties: 'labelTwo',
					type: '[String]',
					description: 'It defines filter sub-heading.'
				},
				{
					properties: 'labelTwoSize',
					type: '[String]',
					description: 'It defines font-size for filter sub-heading.'
				},
				{
					properties: 'labelTwoCustomClass',
					type: '[String]',
					description: 'It defines customclass for filter sub-heading.'
				},
				{
					properties: 'labelThree',
					type: '[String]',
					description: `It defines date-filter 'from' label.`
				},
				{
					properties: 'labelThreeSize',
					type: '[String]',
					description: `It defines font-size for date-filter 'from' label.`
				},
				{
					properties: 'labelThreeCustomClass',
					type: '[String]',
					description: `It defines custom-class for date-filter 'from' label.`
				},
				{
					properties: 'labelFour',
					type: '[String]',
					description: `It defines date-filter 'To' label.`
				},
				{
					properties: 'labelFourSize',
					type: '[String]',
					description: `It defines font-size for date-filter 'To' label.`
				},
				{
					properties: 'labelFourCustomClass',
					type: '[String]',
					description: `It defines custom-class for date-filter 'To' label.`
				},
				{
					properties: 'filterOnChange',
					type: '[Output]',
					description: 'It corresponds to change event-emitter for checkbox.'
				},
				{
					properties: 'applyFilter',
					type: '[Output]',
					description: 'It corresponds to click event-emitter for applyFilter.'
				},
				{
					properties: 'selectAll',
					type: '[Output]',
					description: 'It corresponds to click event-emitter for selectAll action.'
				},
				{
					properties: 'deselectAll',
					type: '[Output]',
					description: 'It corresponds to click event-emitter for deselectAll action.'
				},
				{
					properties: 'statusTypesDynamic',
					type: '[Output]',
					description: 'It corresponds to the array data for filter.'
				}
			]
		},
		{

			data: [
				{
					properties: 'title',
					type: '[String]',
					description: 'It defines title for option modal.'
				},
				{
					properties: 'title-size',
					type: '[String]',
					description: 'It defines font-size for the title.'
				},
				{
					properties: 'title-color',
					type: '[String]',
					description: 'It defines font-color for the title.'
				},
				{
					properties: 'title-custom-class',
					type: '[String]',
					description: 'It defines custom-class for the title.'
				},
				{
					properties: 'title-Id',
					type: '[String]',
					description: 'It defines the Id for title.'
				},
				{
					properties: 'content-one',
					type: '[String]',
					description: 'It defines the project-name for option modal.'
				},
				{
					properties: 'content-one-size',
					type: '[String]',
					description: 'It defines font-size for content-one.'
				},
				{
					properties: 'content-one-color',
					type: '[String]',
					description: 'It defines font-color for content-one.'
				},
				{
					properties: 'content-one-custom-class',
					type: '[String]',
					description: 'It defines the custom-class for content-one.'
				},
				{
					properties: 'content-one-Id',
					type: '[String]',
					description: 'It defines the Id for content-one.'
				},
				{
					properties: 'img-class',
					type: '[String]',
					description: 'It defines the custom-class for company-logo.'
				},
				{
					properties: 'label-one',
					type: '[String]',
					description: 'It defines votes heading for option modal.'
				},
				{
					properties: 'label-one-size',
					type: '[String]',
					description: 'It defines the font-size for label-one.'
				},
				{
					properties: 'label-one-color',
					type: '[String]',
					description: 'It defines the font-color for label-one.'
				},
				{
					properties: 'label-one-custom-class',
					type: '[String]',
					description: 'It defines the custom-class for label-one.'
				},
				{
					properties: 'label-one-Id',
					type: '[String]',
					description: 'It defines the Id for label-one.'
				},
				{
					properties: 'content-two',
					type: '[String]',
					description: 'It defines the vote-count for option modal.'
				},
				{
					properties: 'content-two-size',
					type: '[String]',
					description: 'It defines the font-size for content-two.'
				},
				{
					properties: 'content-two-color',
					type: '[String]',
					description: 'It defines the font-color for content-two.'
				},
				{
					properties: 'content-two-custom-class',
					type: '[String]',
					description: 'It defines the custom-class for content-two.'
				},
				{
					properties: 'content-two-Id',
					type: '[String]',
					description: 'It defines the Id for content-two.'
				},
				{
					properties: 'label-two',
					type: '[String]',
					description: 'It defines the outline label for option modal.'
				},
				{
					properties: 'label-two-size',
					type: '[String]',
					description: 'It defines the font-size for label-two.'
				},
				{
					properties: 'label-two-color',
					type: '[String]',
					description: 'It defines the font-color for label-two.'
				},
				{
					properties: 'label-two-custom-class',
					type: '[String]',
					description: 'It defines the custom-class for label-two.'
				},
				{
					properties: 'label-two-Id',
					type: '[String]',
					description: 'It defines the Id for label-two.'
				},
				{
					properties: 'outline',
					type: '[String]',
					description: 'It defines the outline for the project.'
				},
				{
					properties: 'outline-size',
					type: '[String]',
					description: 'It defines the font-size for outline.'
				},
				{
					properties: 'outline-color',
					type: '[String]',
					description: 'It defines the font-color for outline.'
				},
				{
					properties: 'outline-custom-class',
					type: '[String]',
					description: 'It defines the custom class for outline.'
				},
				{
					properties: 'outline-Id',
					type: '[String]',
					description: 'It defines the Id for outline.'
				},
				{
					properties: 'label-three',
					type: '[String]',
					description: 'It defines the team member label.'
				},
				{
					properties: 'label-three-size',
					type: '[String]',
					description: 'It defines the font-size for label-three.'
				},
				{
					properties: 'label-three-color',
					type: '[String]',
					description: 'It defines the font-color for label-three.'
				},
				{
					properties: 'label-three-custom-class',
					type: '[String]',
					description: 'It defines the custom-class for label-three.'
				},
				{
					properties: 'label-three-Id',
					type: '[String]',
					description: 'It defines the Id for label-three.'
				},
				{
					properties: 'label-four',
					type: '[String]',
					description: 'It defines the addtional resources label.'
				},
				{
					properties: 'label-four-size',
					type: '[String]',
					description: 'It defines the font-size of label-four.'
				},
				{
					properties: 'label-four-color',
					type: '[String]',
					description: 'It defines the font-color of label-four.'
				},
				{
					properties: 'label-four-custom-class',
					type: '[String]',
					description: 'It defines the custom-class for label-four.'
				},
				{
					properties: 'label-four-Id',
					type: '[String]',
					description: 'It defines the Id for label-four.'
				},
				{
					properties: 'company-logo',
					type: '[String]',
					description: 'It defines the company logo.'
				},
				{
					properties: 'iconSize',
					type: '[Number]',
					description: 'It defines the icon font-size.'
				},
				{
					properties: 'iconColor',
					type: '[String]',
					description: 'It defines the icon color.'
				},
				{
					properties: 'iconClass',
					type: '[String]',
					description: 'It defines the icon custom class.'
				},
				{
					properties: 'userNameSize',
					type: '[Number]',
					description: 'It corresponds to the user-name font-size.'
				},
				{
					properties: 'userNameColor',
					type: '[String]',
					description: 'It corresponds to the user-name font-color.'
				},
				{
					properties: 'userNameClass',
					type: '[String]',
					description: 'It corresponds to the user-name custom class.'
				},
				{
					properties: 'userDesignationSize',
					type: '[Number]',
					description: 'It corresponds to the user-designation font-size.'
				},
				{
					properties: 'userDesignationColor',
					type: '[String]',
					description: 'It corresponds to the user-designation font-color.'
				},
				{
					properties: 'userDesignationClass',
					type: '[String]',
					description: 'It corresponds to the user-designation custom class.'
				},
				{
					properties: 'userImgClass',
					type: '[String]',
					description: 'It corresponds to the user-image custom class.'
				},
				{
					properties: 'widgetCustomClass',
					type: '[String]',
					description: 'It corresponds to the users-widget custom class.'
				},
				{
					properties: 'links',
					type: '[Array]',
					description: 'It corresponds to the additional resources links.'
				},
				{
					properties: 'linksKey',
					type: '[Array]',
					description: 'It defines key name in link array for additional resources links.'
				}
			]
		},
		{
			data: [
				{
					properties: 'titleStyle',
					type: '[String]',
					description: 'It defines custom class for title(project name).'
				},
				{
					properties: 'summaryStyle',
					type: '[String]',
					description: 'It defines custom class for project Summary.'
				},
				{
					properties: 'bgColor',
					type: '[String]',
					description: 'It defines background-color for choice-widget.'
				},
				{
					properties: 'footerbox',
					type: '[String]',
					description: 'It defines custom class for choice-widget-footer.'
				},
				{
					properties: 'choiceOptions',
					type: '[Array]',
					description: 'It defines choice-options array.'
				},
				{
					properties: 'teamMemberskey',
					type: '[String]',
					description: 'It defines key name for teamMemebers details in choiceoptions array.'
				}
			]
		},
		{
			data: [
				{
					properties: 'title-id',
					type: '[String]',
					description: 'It defines id corresponding to the title of the homepage button.'
				},
				{
					properties: 'title-size',
					type: '[String]',
					description: 'It defines the font-size for title.'
				},
				{
					properties: 'doughnutChartData',
					type: '[Array]',
					description: 'It defines the chart-data for Voting breakdown.'
				},
			]
		},
		{
			data: [
				{
					properties: 'title',
					type: '[String]',
					description: 'It defines the title for Voting breakdown.'
				},
				{
					properties: 'title-size',
					type: '[String]',
					description: 'Corresponds to the value of font-size for the title.'
				},
				{
					properties: 'icon-custom-class',
					type: '[String]',
					description: 'It defines the custom class for icon.'
				},
				{
					properties: 'suku-button-custom-class',
					type: '[String]',
					description: 'It defines the custom class for home button.'
				},
				{
					properties: 'button-data',
					type: '[Array]',
					description: 'It defines the data for home button.'
				},
				{
					properties: 'sendRoutePath',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'btn-one-label',
					type: '[String]',
					description: 'It corresponds to the label name for the button-one which is left most in the footer.'
				},
				{
					properties: 'btn-one-id',
					type: '[String]',
					description: 'It defines id corresponding to the button-one.'
				},
				{
					properties: 'btn-one-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for the button-one label.'
				},
				{
					properties: 'btn-one-color',
					type: '[String]',
					description: 'It defines font-color for the button-one label.'
				},
				{
					properties: 'btn-one-weight',
					type: '[Number]',
					description: 'It defines font-weight for the button-one label.'
				},
				{
					properties: 'btn-one-custom-class',
					type: '[String]',
					description: 'It defines custom class for the button-one label.'
				},
				{
					properties: 'btn-one-visible',
					type: '[Boolean]',
					description: 'It corresponds to visibility property for the button-one.'
				},
				{
					properties: 'btnOneAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using button-one.'
				},
				{
					properties: 'btn-two-label',
					type: '[String]',
					description: 'It corresponds to the label name for the button-two which is left most in the footer.'
				},
				{
					properties: 'btn-two-id',
					type: '[String]',
					description: 'It defines id corresponding to the button-two.'
				},
				{
					properties: 'btn-two-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for the button-two label.'
				},
				{
					properties: 'btn-two-color',
					type: '[String]',
					description: 'It defines font-color for the button-two label.'
				},
				{
					properties: 'btn-two-weight',
					type: '[Number]',
					description: 'It defines font-weight for the button-two label.'
				},
				{
					properties: 'btn-two-custom-class',
					type: '[String]',
					description: 'It defines custom class for the button-two label.'
				},
				{
					properties: 'btn-two-visible',
					type: '[Boolean]',
					description: 'It corresponds to visibility property for the button-two.'
				},
				{
					properties: 'btnTwoAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using button-two.'
				},
				{
					properties: 'btn-three-label',
					type: '[String]',
					description: 'It corresponds to the label name for the button-three which is left most in the footer.'
				},
				{
					properties: 'btn-three-id',
					type: '[String]',
					description: 'It defines id corresponding to the button-three.'
				},
				{
					properties: 'btn-three-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for the button-three label.'
				},
				{
					properties: 'btn-three-color',
					type: '[String]',
					description: 'It defines font-color for the button-three label.'
				},
				{
					properties: 'btn-three-weight',
					type: '[Number]',
					description: 'It defines font-weight for the button-three label.'
				},
				{
					properties: 'btn-three-custom-class',
					type: '[String]',
					description: 'It defines custom class for the button-three label.'
				},
				{
					properties: 'btn-three-visible',
					type: '[Boolean]',
					description: 'It corresponds to visibility property for the button-three.'
				},
				{
					properties: 'btnThreeAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using button-three.'
				},
				{
					properties: 'btn-four-label',
					type: '[String]',
					description: 'It corresponds to the label name for the button-four which is left most in the footer.'
				},
				{
					properties: 'btn-four-id',
					type: '[String]',
					description: 'It defines id corresponding to the button-four.'
				},
				{
					properties: 'btn-four-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for the button-four label.'
				},
				{
					properties: 'btn-four-color',
					type: '[String]',
					description: 'It defines font-color for the button-four label.'
				},
				{
					properties: 'btn-four-weight',
					type: '[Number]',
					description: 'It defines font-weight for the button-four label.'
				},
				{
					properties: 'btn-four-custom-class',
					type: '[String]',
					description: 'It defines custom class for the button-four label.'
				},
				{
					properties: 'btn-four-visible',
					type: '[Boolean]',
					description: 'It corresponds to visibility property for the button-four.'
				},
				{
					properties: 'btnFourAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using button-four.'
				}
			]
		},
		{
			data: [
			]
		},
		{
			data: [
				{
					properties: 'payment-method',
					type: '[String]',
					description: 'It corresponds to the value of payment method.'
				},
				{
					properties: 'product-price',
					type: '[Number]',
					description: 'It corresponds to the value of product price.'
				},
				{
					properties: 'product-total-price',
					type: '[Number]',
					description: "It corresponds to the value of product's total price."
				},
				{
					properties: 'product-quantity',
					type: '[Number]',
					description: "It corresponds to the value of product's quantity."
				},
				{
					properties: 'minimum-quantity',
					type: '[Number]',
					description: 'It corresponds to the value of minimun product quantity.'
				},
				{
					properties: 'payment-terms',
					type: '[Number]',
					description: 'It corresponds to the value of payment terms.'
				},
				{
					properties: 'delivery-terms',
					type: '[Number]',
					description: 'It corresponds to the value of delivery terms.'
				},
				{
					properties: 'payment-method-label',
					type: '[String]',
					description: 'It corresponds to the label name for payment method.'
				},
				{
					properties: 'payment-terms-label',
					type: '[String]',
					description: 'It corresponds to the label name for payment terms.'
				},
				{
					properties: 'delivery-terms-label',
					type: '[String]',
					description: 'It corresponds to the label name for delivery terms.'
				},
				{
					properties: 'total-price-label',
					type: '[String]',
					description: 'It corresponds to the label name for total price.'
				},
				{
					properties: 'quantity-label',
					type: '[String]',
					description: 'It corresponds to the label name for quantity.'
				},
				{
					properties: 'min-qtylabel',
					type: '[String]',
					description: 'It corresponds to the label name for min-quantity.'
				},
				{
					properties: 'title-text',
					type: '[String]',
					description: 'It corresponds to the label name for title.'
				},
				{
					properties: 'custom-class',
					type: '[string]',
					description: 'It defines custom class for the bid-widget.'
				},
				{
					properties: 'price-font-size',
					type: '[string]',
					description: 'It Corresponds to the value of font-size for price.'
				},
				{
					properties: 'price-font-color',
					type: '[String]',
					description: 'It defines font-color for the price label.'
				},
				{
					properties: 'list-font-color',
					type: '[String]',
					description: 'It defines font-color for the list.'
				},
				{
					properties: 'list-font-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for the list.'
				},
				{
					properties: 'bid-title-font-color',
					type: '[String]',
					description: 'It defines font-color for the bid title.'
				},
				{
					properties: 'bid-title-font-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for the bid title.'
				},
				{
					properties: 'bid-detail-font-color',
					type: '[String]',
					description: 'It defines font-color for the bid details.'
				},
				{
					properties: 'bid-detail-font-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for the bid details.'
				},
				{
					properties: 'list-font-weight',
					type: '[Number]',
					description: 'It defines font-weight for the list.'
				},
				{
					properties: 'bid-title-font-weight',
					type: '[Number]',
					description: 'It defines font-weight for the bid title.'
				},
				{
					properties: 'bid-detail-font-weight',
					type: '[Number]',
					description: 'It defines font-weight for the bid details.'
				},
				{
					properties: 'title-font-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for the title.'
				},
				{
					properties: 'title-font-color',
					type: '[String]',
					description: 'It defines font-color for the title.'
				},
				{
					properties: 'title-font-weight',
					type: '[Number]',
					description: 'It defines font-weight for the title.'
				},
				{
					properties: 'aside-bg-Color',
					type: '[String]',
					description: 'It defines background color for the layout.'
				},
				{
					properties: 'product-payment-custom-class',
					type: '[String]',
					description: 'It defines custom class for product payment.'
				},
				{
					properties: 'bid-details-custom-class',
					type: '[String]',
					description: 'It defines custom class for bid details.'
				},
				{
					properties: 'article-alignment-custom-class',
					type: '[String]',
					description: 'It defines custom class for artical alignment.'
				}
			]
		},
		{
			data: [
				{
					properties: 'dateString',
					type: '[String]',
					description: 'It corresponds to the value of date string needs to be formated'
				},
				{
					properties: 'dateId',
					type: '[String]',
					description: 'It defines id corresponding to the display date.'
				},
				{
					properties: 'fontSize',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for date.'
				},
				{
					properties: 'fontWeight',
					type: '[Number]',
					description: 'Weight corresponds to the font size.'
				},
				{
					properties: 'fontColor',
					type: '[String]',
					description: 'It defines font-color for the date.'
				},
			]
		},
		{
			data: [
				{
					properties: 'widgetTitle',
					type: '[String]',
					description: 'It corresponds to the value for title'
				},
				{
					properties: 'widgetTitleid',
					type: '[String]',
					description: 'It defines id corresponding to the title.'
				},
				{
					properties: 'widgetTitleSize',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for title.'
				},
				{
					properties: 'widgetTitleWeight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for title.'
				},
				{
					properties: 'widgetTitleColor',
					type: '[String]',
					description: 'It defines font-color for the title.'
				},
				{
					properties: 'shippingaddressCustomClass',
					type: '[String]',
					description: 'The defines custom class attribute for address'
				},
				{
					properties: 'firstName',
					type: '[String]',
					description: 'It Corresponds to the value of label first name'
				},
				{
					properties: 'secondName',
					type: '[String]',
					description: 'It Corresponds to the value of label second name'
				},
				{
					properties: 'addressOne',
					type: '[String]',
					description: 'It Corresponds to the value of address line one'
				},
				{
					properties: 'addressTwo',
					type: '[String]',
					description: 'It Corresponds to the value of address line two'
				}, {
					properties: 'city',
					type: '[String]',
					description: 'It Corresponds to the value of city'
				},
				{
					properties: 'state',
					type: '[String]',
					description: 'It Corresponds to the value of state'
				},
				{
					properties: 'zip',
					type: '[String]',
					description: 'It Corresponds to the value of zip code'
				},
				{
					properties: 'country',
					type: '[String]',
					description: 'It Corresponds to the value of country'
				},
			]
		},
		{
			data: [
				{
					properties: 'socialIcons',
					type: '[array]',
					description: '[object]={icon,id,path} use the formate to create array .'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				}
			]
		},
		{
			data: [
				{
					properties: 'action',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'check-box-color',
					type: '[String]',
					description: 'It defines color for the check box.'
				},
				{
					properties: 'title',
					type: '[String]',
					description: 'It corresponds to the value for title'
				},
				{
					properties: 'title-color',
					type: '[String]',
					description: 'It defines color for title.'
				},
				{
					properties: 'title-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for title.'
				},
				{
					properties: 'title-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for title.'
				},
				{
					properties: 'description',
					type: '[String]',
					description: 'It corresponds to the value for description'
				},
				{
					properties: 'description-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for description'
				},
				{
					properties: 'link-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for link'
				},
				{
					properties: 'link-one',
					type: '[String]',
					description: 'It corresponds to the value for link one'
				},
				{
					properties: 'link-two',
					type: '[String]',
					description: 'It corresponds to the value for link two'
				},
				{
					properties: 'link-name-one',
					type: '[String]',
					description: 'It defines value for the first link name label'
				},
				{
					properties: 'link-name-two',
					type: '[String]',
					description: 'It defines value for the second link name label'
				},
				{
					properties: 'control',
					type: '[String]',
					description: 'It defines to formcontrolname for checkbox element.'
				},
			]
		},
		{
			data: [
				{
					properties: 'action',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'titleOne',
					type: '[String]',
					description: 'It corresponds to the value for title'
				},
				{
					properties: 'title-one-color',
					type: '[String]',
					description: 'It defines color for first title.'
				},
				{
					properties: 'title-one-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for first title.'
				},
				{
					properties: 'title-one-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for first title.'
				},
				{
					properties: 'title-one-id',
					type: '[Number]',
					description: 'It corresponds to the id for first title.'
				},
				{
					properties: 'titleTwo',
					type: '[String]',
					description: 'It corresponds to the value for title'
				},
				{
					properties: 'title-two-color',
					type: '[String]',
					description: 'It defines color for second title.'
				},
				{
					properties: 'title-two-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for second title.'
				},
				{
					properties: 'title-two-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for second title.'
				},
				{
					properties: 'title-two-id',
					type: '[Number]',
					description: 'It corresponds to the id for second title.'
				},

				{
					properties: 'contentOne',
					type: '[String]',
					description: 'It corresponds to the value content'
				},
				{
					properties: 'content-two-color',
					type: '[String]',
					description: 'It defines color for first content.'
				},
				{
					properties: 'content-two-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for first content.'
				},
				{
					properties: 'content-two-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for first content.'
				},
				{
					properties: 'content-two-id',
					type: '[Number]',
					description: 'It corresponds to the id for first content.'
				},
				{
					properties: 'contentTwo',
					type: '[String]',
					description: 'It corresponds to the value content'
				},
				{
					properties: 'content-two-color',
					type: '[String]',
					description: 'It defines color for second content.'
				},
				{
					properties: 'content-two-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for second content.'
				},
				{
					properties: 'content-two-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for second content.'
				},
				{
					properties: 'content-two-id',
					type: '[String]',
					description: 'It corresponds to the id for second content.'
				},
				{
					properties: 'titleThree',
					type: '[String]',
					description: 'It corresponds to the value for title'
				},
				{
					properties: 'title-three-color',
					type: '[String]',
					description: 'It defines color for third title.'
				},
				{
					properties: 'title-three-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for third title.'
				},
				{
					properties: 'title-three-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for third title.'
				},
				{
					properties: 'title-three-id',
					type: '[Number]',
					description: 'It corresponds to the id for third title.'
				},
				{
					properties: 'product-box-content-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for product content box'
				},
				{
					properties: 'product-box-content-bg-color',
					type: '[String]',
					description: 'It defines background color for  product content box.'
				},
			]
		},
		{
			data: [
				{
					properties: 'imageSrc',
					type: '[String]',
					description: 'It corresponds to the value to display image.'
				},
			]
		},		
		{
			data: [
				{
					properties: 'image',
					type: '[String]',
					description: 'It corresponds to the value to display image.'
				},
				{
					properties: 'bgColor',
					type: '[String]',
					description: 'It defines background color.'
				},
				{
					properties: 'icon-one',
					type: '[String]',
					description: 'It Corresponds to the value of icon '
				},
				{
					properties: 'icon-one-id',
					type: '[Number]',
					description: 'It corresponds to the id for first icon.'
				},
				{
					properties: 'icon-two',
					type: '[String]',
					description: 'It Corresponds to the value of icon '
				},
				{
					properties: 'icon-two-id',
					type: '[Number]',
					description: 'It corresponds to the id for first icon.'
				},
				{
					properties: 'custom-class',
					type: '[String]',
					description: 'The defines custom class attribute'
				},
				{
					properties: 'custom-icon-class',
					type: '[String]',
					description: 'The defines custom class attribute for icon'
				},
				{
					properties: 'image-col-size',
					type: '[String]',
					description: 'It Corresponds to the value of size for image.'
				},
				{
					properties: 'customImgclass',
					type: '[String]',
					description: 'The defines custom class attribute for image'
				},
				{
					properties: 'txtcolsize',
					type: '[String]',
					description: 'The defines custom class attribute'
				},
				{
					properties: 'txttwocolsize',
					type: '[String]',
					description: 'The defines custom class attribute'
				},
				{
					properties: 'txtthreecolsize',
					type: '[String]',
					description: 'The defines custom class attribute'
				},
				{
					properties: 'icon-info-one',
					type: '[String]',
					description: 'It corresponds to the value for icon information (tooltip)'
				},
				{
					properties: 'title-one',
					type: '[String]',
					description: 'It corresponds to the value for title'
				},
				{
					properties: 'title-one',
					type: '[String]',
					description: 'It corresponds to the value for title'
				},
				{
					properties: 'title-one-color',
					type: '[String]',
					description: 'It defines color for first title.'
				},
				{
					properties: 'title-one-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for first title.'
				},
				{
					properties: 'title-one-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for first title.'
				},
				{
					properties: 'title-one-customclass',
					type: '[Number]',
					description: 'The defines custom class attribute for title.'
				},
				{
					properties: 'icon-info-two',
					type: '[String]',
					description: 'It corresponds to the value for icon information (tooltip)'
				},
				{
					properties: 'content-one',
					type: '[String]',
					description: 'It corresponds to the value for content'
				},
				{
					properties: 'content-one-color',
					type: '[String]',
					description: 'It defines color for first content.'
				},
				{
					properties: 'content-one-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for first content.'
				},
				{
					properties: 'content-one-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for first content.'
				},
				{
					properties: 'content-one-customclass',
					type: '[String]',
					description: 'The defines custom class attribute for first content.'
				},
				{
					properties: 'content-two',
					type: '[String]',
					description: 'It corresponds to the value content'
				},
				{
					properties: 'content-two-color',
					type: '[String]',
					description: 'It defines color for second content.'
				},
				{
					properties: 'content-two-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for second content.'
				},
				{
					properties: 'content-two-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for second content.'
				},
				{
					properties: 'content-two-customclass',
					type: '[String]',
					description: 'The defines custom class attribute for second content.'
				},
				{
					properties: 'sub-title-two',
					type: '[String]',
					description: 'It corresponds to the value for sub title'
				},
				{
					properties: 'sub-title-two-color',
					type: '[String]',
					description: 'It defines color for second sub title.'
				},
				{
					properties: 'sub-title-two-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for second sub title.'
				},
				{
					properties: 'sub-title-two-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for second sub title.'
				},
				{
					properties: 'sub-title-two-customclass',
					type: '[Number]',
					description: 'The defines custom class attribute for second sub title.'
				},
				{
					properties: 'sub-title-three',
					type: '[String]',
					description: 'It corresponds to the value for sub-title'
				},
				{
					properties: 'sub-title-three-color',
					type: '[String]',
					description: 'It defines color for third title.'
				},
				{
					properties: 'sub-title-three-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for sub third title.'
				},
				{
					properties: 'sub-title-three-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for third sub title.'
				},
				{
					properties: 'sub-title-threeclass',
					type: '[Number]',
					description: 'The defines custom class attribute for third sub title.'
				},
				{
					properties: 'content-three',
					type: '[String]',
					description: 'It corresponds to the value for sub-title'
				},
				{
					properties: 'content-three-color',
					type: '[String]',
					description: 'It defines color for third content.'
				},
				{
					properties: 'content-three-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for third content.'
				},
				{
					properties: 'content-three-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for third content.'
				},
				{
					properties: 'content-three-customclass',
					type: '[String]',
					description: 'The defines custom class attribute for third content.'
				},
				{
					properties: 'userAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
			]
		},
		{
			data: [
				{
					properties: 'form',
					type: '[String]',
					description: 'It defines FormGroup name.'
				},
				{
					properties: 'control',
					type: '[Input]',
					description: 'It holds the formcontrolname for radio button.'
				},
				{
					properties: 'radioButtonId',
					type: '[Number]',
					description: 'It corresponds to the id for radio button.'
				},
				{
					properties: 'color',
					type: '[String]',
					description: 'It defines color for radio button.'
				},
				{
					properties: 'content',
					type: '[String]',
					description: 'It corresponds to the value for content'
				},
				{
					properties: 'contentCustomClass',
					type: '[String]',
					description: 'The defines custom class attribute for radio button content.'
				},
				{
					properties: 'value',
					type: '[Number]',
					description: 'It Corresponds to the default value of the radio button.'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
			]
		},
		{
			data: [
				{
					properties: 'image',
					type: '[String]',
					description: 'It corresponds to the value to display image.'
				},
				{
					properties: 'bgColor',
					type: '[String]',
					description: 'It defines background color.'
				},
				{
					properties: 'icon-one',
					type: '[String]',
					description: 'It Corresponds to the value of icon '
				},
				{
					properties: 'icon-one-id',
					type: '[Number]',
					description: 'It corresponds to the id for first icon.'
				},
				{
					properties: 'icon-two',
					type: '[String]',
					description: 'It Corresponds to the value of icon '
				},
				{
					properties: 'icon-two-id',
					type: '[Number]',
					description: 'It corresponds to the id for first icon.'
				},
				{
					properties: 'custom-class',
					type: '[String]',
					description: 'The defines custom class attribute'
				},
				{
					properties: 'custom-icon-class',
					type: '[String]',
					description: 'The defines custom class attribute for icon'
				},
				{
					properties: 'image-col-size',
					type: '[String]',
					description: 'It Corresponds to the value of size for image.'
				},
				{
					properties: 'customImgclass',
					type: '[String]',
					description: 'The defines custom class attribute for image'
				},
				{
					properties: 'txtcolsize',
					type: '[String]',
					description: 'The defines custom class attribute'
				},
				{
					properties: 'txttwocolsize',
					type: '[String]',
					description: 'The defines custom class attribute'
				},
				{
					properties: 'txtthreecolsize',
					type: '[String]',
					description: 'The defines custom class attribute'
				},
				{
					properties: 'icon-info-one',
					type: '[String]',
					description: 'It corresponds to the value for icon information (tooltip)'
				},
				{
					properties: 'card-title-name',
					type: '[String]',
					description: 'It corresponds to the name for card title'
				},
				{
					properties: 'card-title-color',
					type: '[String]',
					description: 'It defines color for card title.'
				},
				{
					properties: 'card-title-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for first title.'
				},
				{
					properties: 'card-title-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for first title.'
				},
				{
					properties: 'card-title-id',
					type: '[Number]',
					description: 'It corresponds to the id for card title.'
				},
				{
					properties: 'card-content-name',
					type: '[String]',
					description: 'It corresponds to the name for card content'
				},
				{
					properties: 'card-content-color',
					type: '[String]',
					description: 'It defines color for card content.'
				},
				{
					properties: 'card-content-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for first content.'
				},
				{
					properties: 'card-content-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for first content.'
				},
				{
					properties: 'card-content-id',
					type: '[Number]',
					description: 'It corresponds to the id for card content.'
				},
				{
					properties: 'custom-title-class',
					type: '[String]',
					description: 'It defines custom class attribute for title.'
				},
				{
					properties: 'custom-content-class',
					type: '[String]',
					description: 'It defines custom class attribute for content.'
				},
				{
					properties: 'icon-color',
					type: '[String]',
					description: 'It defines color for icon .'
				},
				{
					properties: 'icon-font-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for icon.'
				},
				{
					properties: 'enable-info-tooltip',
					type: '[boolean]',
					description: 'It defines whether to enable or disable tooltip information  '
				},
				{
					properties: 'tooltip-info',
					type: '[String]',
					description: 'It corresponds to the value for information (tooltip)'
				},
				{
					properties: 'tooltiptext-customclass',
					type: '[String]',
					description: 'The defines custom class attribute for tooltip.'
				},
				{
					properties: 'position-tooltip',
					type: '[String]',
					description: 'The defines custom position for tooltip to align left or right.'
				},
				{
					properties: 'position-top-tooltext',
					type: '[String]',
					description: 'The defines custom position for tooltip to align top.'
				},
				{
					properties: 'position-btn-tooltext',
					type: '[String]',
					description: 'The defines custom position for tooltip to align bottom.'
				},
			]
		},
		{
			data: [
				{
					properties: 'image',
					type: '[String]',
					description: 'It corresponds to the value to display image.'
				},
				{
					properties: 'bgColor',
					type: '[String]',
					description: 'It defines background color.'
				},
				{
					properties: 'icon-one',
					type: '[String]',
					description: 'It Corresponds to the value of icon '
				},
				{
					properties: 'icon-two',
					type: '[String]',
					description: 'It Corresponds to the value of icon '
				},
				{
					properties: 'customclass',
					type: '[String]',
					description: 'The defines custom class attribute'
				},
				{
					properties: 'custom-iconclass',
					type: '[String]',
					description: 'The defines custom class attribute for icon'
				},
				{
					properties: 'image-col-size',
					type: '[String]',
					description: 'It Corresponds to the value of size for image.'
				},
				{
					properties: 'customImgclass',
					type: '[String]',
					description: 'The defines custom class attribute for image'
				},
				{
					properties: 'txtcolsize',
					type: '[String]',
					description: 'The defines custom class attribute'
				},
				{
					properties: 'txttwocolsize',
					type: '[String]',
					description: 'The defines custom class attribute'
				},
				{
					properties: 'txtthreecolsize',
					type: '[String]',
					description: 'The defines custom class attribute'
				},
				{
					properties: 'title-one',
					type: '[String]',
					description: 'It corresponds to the value for title'
				},
				{
					properties: 'title-one-color',
					type: '[String]',
					description: 'It defines color for first title.'
				},
				{
					properties: 'title-one-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for first title.'
				},
				{
					properties: 'title-one-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for first title.'
				},
				{
					properties: 'title-one-customclass',
					type: '[Number]',
					description: 'The defines custom class attribute for title.'
				},
				{
					properties: 'rating-title',
					type: '[String]',
					description: 'It corresponds to the value for rating title'
				},
				{
					properties: 'rating-title-color',
					type: '[String]',
					description: 'It defines color for rating title.'
				},
				{
					properties: 'rating-title-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for rating title.'
				},
				{
					properties: 'rating-title-size',
					type: '[Number]',
					description: 'It Corresponds to the value of font-size for rating title.'
				},
				{
					properties: 'rating-title-customclass',
					type: '[String]',
					description: 'The defines custom class attribute for rating title.'
				},
				{
					properties: 'content-one',
					type: '[String]',
					description: 'It corresponds to the value for content'
				},
				{
					properties: 'content-one-color',
					type: '[String]',
					description: 'It defines color for first content.'
				},
				{
					properties: 'content-one-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for first content.'
				},
				{
					properties: 'content-one-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for first content.'
				},
				{
					properties: 'content-one-customclass',
					type: '[String]',
					description: 'The defines custom class attribute for first content.'
				},
				{
					properties: 'content-two',
					type: '[String]',
					description: 'It corresponds to the value content'
				},
				{
					properties: 'content-two-color',
					type: '[String]',
					description: 'It defines color for second content.'
				},
				{
					properties: 'content-two-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for second content.'
				},
				{
					properties: 'content-two-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for second content.'
				},
				{
					properties: 'content-two-customclass',
					type: '[String]',
					description: 'The defines custom class attribute for second content.'
				},
				{
					properties: 'content-three',
					type: '[String]',
					description: 'It corresponds to the value for sub-title'
				},
				{
					properties: 'content-three-color',
					type: '[String]',
					description: 'It defines color for third content.'
				},
				{
					properties: 'content-three-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for third content.'
				},
				{
					properties: 'content-three-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for third content.'
				},
				{
					properties: 'content-three-customclass',
					type: '[String]',
					description: 'The defines custom class attribute for third content.'
				},
				{
					properties: 'sub-title-two',
					type: '[String]',
					description: 'It corresponds to the value for sub title'
				},
				{
					properties: 'sub-title-two-color',
					type: '[String]',
					description: 'It defines color for second sub title.'
				},
				{
					properties: 'sub-title-two-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for second sub title.'
				},
				{
					properties: 'sub-title-two-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for second sub title.'
				},
				{
					properties: 'sub-title-two-customclass',
					type: '[String]',
					description: 'The defines custom class attribute for second sub title.'
				},
				{
					properties: 'sub-title-three',
					type: '[String]',
					description: 'It corresponds to the value for sub-title'
				},
				{
					properties: 'sub-title-three-color',
					type: '[String]',
					description: 'It defines color for third title.'
				},
				{
					properties: 'sub-title-three-size',
					type: '[Number-rem]',
					description: 'It Corresponds to the value of font-size for sub third title.'
				},
				{
					properties: 'sub-title-three-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for third sub title.'
				},
				{
					properties: 'sub-title-threeclass',
					type: '[String]',
					description: 'The defines custom class attribute for third sub title.'
				},
				{
					properties: 'userAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'action',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'rating-value',
					type: '[String]',
					description: 'It corresponds to the value for rating star.'
				},
			]
		},
		{
			data: [
				{
					properties: 'progress-style-one',
					type: '[String]',
					description: ' it represents the progress as completed.'
				},
				{
					properties: 'progress-style-two',
					type: '[String]',
					description: '  it represents the progress as active.'
				},
				{
					properties: 'progress-style-three',
					type: '[String]',
					description: ' It represents the progress as upcoming.'
				},
				{
					properties: 'progress-style-four',
					type: '[String]',
					description: ' It represents the progress as upcoming.'
				},
				{
					properties: 'custom-heading-one-class',
					type: '[String]',
					description: 'The defines custom class attribute for first heading.'
				},
				{
					properties: 'custom-heading-two-class',
					type: '[String]',
					description: 'The defines custom class attribute for second heading.'
				},
				{
					properties: 'custom-heading-three-class',
					type: '[String]',
					description: 'The defines custom class attribute for third heading.'
				},
				{
					properties: 'custom-heading-four-class',
					type: '[String]',
					description: 'The defines custom class attribute for fourth heading.'
				},
				{
					properties: 'enable-pointer',
					type: '[Boolean]',
					description: ' It enable/disable pointer .'
				},
				{
					properties: 'progressBarLabels',
					type: '[Object]',
					description: 'it represents the list of labels.'
				},
				{
					properties: 'progressBarIconId',
					type: '[Object]',
					description: 'it represents the list of icon id.'
				},
				{
					properties: 'progressBarTitleId',
					type: '[String]',
					description: 'it represents the list of title id.'
				},
				{
					properties: 'progressOneAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'progressTwoAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'progressThreeAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'progressFourAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'Custom CSS',
					type: '[String]',
					description:
						'ProgressCompleted- "progressCompleted", ProgressActive-"progressActive", ProgressUpcoming-"progressUpcoming".'
				}
			]
		},
		{
			data: [
				{
					properties: 'progress-style-one',
					type: '[String]',
					description: ' it represents the progress as completed.'
				},
				{
					properties: 'progress-style-two',
					type: '[String]',
					description: '  it represents the progress as active.'
				},
				{
					properties: 'progress-style-three',
					type: '[String]',
					description: ' It represents the progress as upcoming.'
				},
				{
					properties: 'progress-style-four',
					type: '[String]',
					description: ' It represents the progress as upcoming.'
				},
				{
					properties: 'progress-style-five',
					type: '[String]',
					description: ' It represents the progress as upcoming .'
				},
				{
					properties: 'custom-heading-one-class',
					type: '[String]',
					description: 'The defines custom class attribute for first heading.'
				},
				{
					properties: 'custom-heading-two-class',
					type: '[String]',
					description: 'The defines custom class attribute for second heading.'
				},
				{
					properties: 'custom-heading-three-class',
					type: '[String]',
					description: 'The defines custom class attribute for third heading.'
				},
				{
					properties: 'custom-heading-four-class',
					type: '[String]',
					description: 'The defines custom class attribute for fourth heading.'
				},
				{
					properties: 'custom-heading-five-class',
					type: '[String]',
					description: 'The defines custom class attribute for fifth heading.'
				},
				{
					properties: 'enable-pointer',
					type: '[Boolean]',
					description: ' It enable/disable pointer .'
				},
				{
					properties: 'progressBarLabels',
					type: '[Object]',
					description: 'it represents the list of labels.'
				},
				{
					properties: 'progressBarIconId',
					type: '[Object]',
					description: 'it represents the list of icon id.'
				},
				{
					properties: 'progressBarTitleId',
					type: '[Object]',
					description: 'it represents the list of title id.'
				},
				{
					properties: 'progressOneAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'progressTwoAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'progressThreeAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'progressFourAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'progressFiveAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'Custom CSS',
					type: '[String]',
					description:
						'ProgressCompleted- "progressCompleted", ProgressActive-"progressActive", ProgressUpcoming-"progressUpcoming".'
				}
			]
		},
		{
			data: [
				{
					properties: 'title',
					type: '[String]',
					description: 'It corresponds to the value for title'
				},
				{
					properties: 'titleId',
					type: '[String]',
					description: 'It corresponds to the id for title.'
				},
				{
					properties: 'titleCustomClass',
					type: '[String]',
					description: 'The defines custom class attribute for title.'
				},
				{
					properties: 'sub-title',
					type: '[String]',
					description: 'It corresponds to the value for sub title'
				},
				{
					properties: 'sub-title-id',
					type: '[String]',
					description: 'It corresponds to the id for sub title.'
				},
				{
					properties: 'sub-title-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for sub title.'
				},
				{
					properties: 'description-Id',
					type: '[String]',
					description: 'It corresponds to the id for description.'
				},
				{
					properties: 'description-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for description.'
				},
				{
					properties: 'icon',
					type: '[String]',
					description: 'It corresponds to the value for icon '
				},
				{
					properties: 'icon-id',
					type: '[String]',
					description: 'It corresponds to the id for icon.'
				},
				{
					properties: 'label-one',
					type: '[String]',
					description: 'It corresponds to the value for label'
				},
				{
					properties: 'label-one-id',
					type: '[String]',
					description: 'It corresponds to the id for label.'
				},
				{
					properties: 'label-one-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for label.'
				},
				{
					properties: 'add',
					type: '[Output]',
					description: 'It helps the user to perform the required action using add.'
				}
			]
		},
		{
			data: [
				{
					properties: 'profileImage',
					type: '[String]',
					description: '	An image is a picture that has been created or copied and stored to display.'
				},
				{
					properties: 'user-name',
					type: '[String]',
					description: 'It corresponds to the value for user name'
				},
				{
					properties: 'nameWeight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for user name.'
				},
				{
					properties: 'nameColor',
					type: '[String]',
					description: 'It defines color for user name.'
				},
				{
					properties: 'nameSize',
					type: '[Number]',
					description: 'It Corresponds to the value of font-size for user name.'
				},
				{
					properties: 'userNameId',
					type: '[String]',
					description: 'It corresponds to the id for user name.'
				},
				{
					properties: 'nameCustomClass',
					type: '[String]',
					description: 'The defines custom class attribute for name.'
				},
				{
					properties: 'account-type',
					type: '[String]',
					description: 'It corresponds to the value for account type'
				},
				{
					properties: 'accountWeight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for account type.'
				},
				{
					properties: 'accountCustomClass',
					type: '[String]',
					description: 'The defines custom class attribute for account type.'
				},
				{
					properties: 'accountSize',
					type: '[Number]',
					description: 'It Corresponds to the value of font-size for account type.'
				},
				{
					properties: 'accountColor',
					type: '[String]',
					description: 'It defines color for account type.'
				},
				{
					properties: 'accountId',
					type: '[String]',
					description: 'It corresponds to the id for account type.'
				},
				{
					properties: 'ratingCustomClass',
					type: '[String]',
					description: 'The defines custom class attribute for rating details.'
				},
				{
					properties: 'rateDetails',
					type: '[String]',
					description: 'It corresponds to the value for rating details'
				},
				{
					properties: 'rateDetailColor',
					type: '[String]',
					description: 'It defines color for rating details.'
				},
				{
					properties: 'ratingDetailWeight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for rating details.'
				},
				{
					properties: 'rateDetailSize',
					type: '[Number]',
					description: 'It Corresponds to the value of font-size for rating details.'
				},
				{
					properties: 'rateDetailsCustomClass',
					type: '[String]',
					description: 'The defines custom class attribute for rating details .'
				},
				{
					properties: 'ratingPrivacy',
					type: '[boolean]',
					description:'It is used to enable/disable privacy of rating.'
				},
				{
					properties: 'rateDetailsId',
					type: '[String]',
					description: 'It corresponds to the id for account type.'
				},
				{
					properties: 'actionOne',
					type: '[Output]',
					description: 'It helps the user to perform the required action using actionOne.'
				},
				{
					properties: 'actionTwo',
					type: '[Output]',
					description: 'It helps the user to perform the required action using actionTwo.'
				},
				{
					properties: 'rating',
					type: '[Output]',
					description: 'It helps the user to perform the required action using rating.'
				},
				{
					properties: 'rating-value',
					type: '[String]',
					description: 'It corresponds to the value for rating star'
				},
				{
					properties: 'subHeadingOne',
					type: '[String]',
					description: 'It corresponds to the value for sub heading one'
				},
				{
					properties: 'subHeadingOneId',
					type: '[String]',
					description: 'It corresponds to the id for sub heading one.'
				},
				{
					properties: 'subHeadingTwo',
					type: '[String]',
					description: 'It corresponds to the value for sub heading two'
				},
				{
					properties: 'subHeadingTwoId',
					type: '[String]',
					description: 'It corresponds to the id for sub heading two.'
				},
				{
					properties: 'editvisibility',
					type: '[boolean]',
					description:'It is used to enable/disable visibility for edit.'
				},
				{
					properties: 'changePasswordvisibility',
					type: '[boolean]',
					description:'It is used to enable/disable visibility for changePassword.'
				},
				{
					properties: 'mail',
					type: '[String]',
					description: 'It corresponds to the value for mail'
				},
				{
					properties: 'mailTextColor',
					type: '[String]',
					description: 'It defines color for mail .'
				},
				{
					properties: 'mailWeight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for mail.'
				},
				{
					properties: 'mailTxtSize',
					type: '[Number]',
					description: 'It Corresponds to the value of font-size for mail.'
				},
				{
					properties: 'mailcustomClass',
					type: '[String]',
					description: 'The defines custom class attribute for mail .'
				},
				{
					properties: 'mailId',
					type: '[String]',
					description: 'It corresponds to the id for mail.'
				},
				{
					properties: 'mailIcon',
					type: '[String]',
					description: 'It corresponds to the value for mail icon'
				},
				{
					properties: 'mailIconClass',
					type: '[String]',
					description: 'The defines class attribute for mail icon .'
				},
				{
					properties: 'icon-one-id',
					type: '[String]',
					description: 'It corresponds to the id for first icon'
				},
				{
					properties: 'icon-one',
					type: '[String]',
					description: 'It corresponds to the value for first icon'
				},
				{
					properties: 'icon-one-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for first icon .'
				},	
				{
					properties: 'number',
					type: '[String]',
					description: 'It corresponds to the value for phone number'
				},
				{
					properties: 'phnumberColor',
					type: '[String]',
					description: 'It defines color for phone number.'
				},
				{
					properties: 'phnumberWeight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for phone number.'
				},
				{
					properties: 'phnumberSize',
					type: '[Number]',
					description: 'It Corresponds to the value of font-size for phone number.'
				},
				{
					properties: 'phnumberCustomClass',
					type: '[String]',
					description: 'The defines custom class attribute for phone number .'
				},
				{
					properties: 'phoneId',
					type: '[String]',
					description: 'It corresponds to the id for phone number.'
				},
				{
					properties: 'phNumberIcon',
					type: '[String]',
					description: 'It corresponds to the value for phone icon'
				},
				{
					properties: 'icon-two-id',
					type: '[String]',
					description: 'It corresponds to the id for second icon'
				},
				{
					properties: 'icon-two',
					type: '[String]',
					description: 'It corresponds to the value for second icon'
				},
				{
					properties: 'icon-two-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for second icon .'
				},{
					properties: 'address',
					type: '[String]',
					description: 'It corresponds to the value for user address'
				},
				{
					properties: 'addressColor',
					type: '[String]',
					description: 'It defines color for user address.'
				},
				{
					properties: 'addressWeight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for user address.'
				},
				{
					properties: 'addressSize',
					type: '[Number]',
					description: 'It Corresponds to the value of font-size for user address.'
				},
				{
					properties: 'addressCustomClass',
					type: '[String]',
					description: 'The defines custom class attribute for user address.'
				},
				{
					properties: 'addressId',
					type: '[String]',
					description: 'It corresponds to the id for user address.'
				},
				{
					properties: 'addressIcon',
					type: '[String]',
					description: 'It corresponds to the value for user address icon'
				},
				{
					properties: 'icon-three-id',
					type: '[String]',
					description: 'It corresponds to the id for third icon'
				},
				{
					properties: 'icon-three',
					type: '[String]',
					description: 'It corresponds to the value for third icon'
				},
				{
					properties: 'icon-three-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for third icon .'
				},{
					properties: 'samBadgeIcon',
					type: '[String]',
					description: 'It corresponds to the value for badge icon'
				},
				{
					properties: 'samBadgeClass',
					type: '[String]',
					description: 'The defines custom class attribute for badge .'
				},				
				{
					properties: 'samIconAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action using actionOne.'
				},
				{
					properties: 'icon-four-id',
					type: '[String]',
					description: 'It corresponds to the id for fourth icon'
				},
				{
					properties: 'icon-four',
					type: '[String]',
					description: 'It corresponds to the value for fourth icon'
				},
				{
					properties: 'icon-four-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for fourth icon .'
				}
			]
		},
		{
			data: [
				{
					properties: 'fundingSourceLabel',
					type: '[Object]',
					description: 'It represents the list of labels & id eg.{labelOne: " your label",labelOneId: "your label id"}.'
				},
				{
					properties: 'fundingSourceWidgetLabel',
					type: '[Object]',
					description: 'It represents the list of widget labels & ideg.{labelOne: " your label",labelOneId: "your label id"}.'
				},
				{
					properties: 'fundingSourceWidgetButtonLabel',
					type: '[Object]',
					description: "It represents the list of widget's button labels & id eg.{labelOne: 'your label',labelOneId: 'your label id'}."
				},
				{
					properties: 'contentOne',
					type: '[String]',
					description: 'It corresponds to the value for first content.'
				},
				{
					properties: 'iconClass',
					type: '[String]',
					description: 'The defines class attribute for icon.'
				},
				{
					properties: 'fundingDetails',
					type: '[Array]',
					description: 'It corresponds to the details for funding data'
				},
				{
					properties: 'removeDefault',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'makeDefaultAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'removeSourceAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'transferFundAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'addSource',
					type: '[Output]',
					description: 'It helps the user to perform the required action using action.'
				},
				{
					properties: 'Custom CSS',
					type: '[String]',
					description:
						'ProgressCompleted- "progressCompleted", ProgressActive-"progressActive", ProgressUpcoming-"progressUpcoming".'
				}
			]
		},
		{
			data: [
				{
					properties: 'dialogData',
					type: '[Object]',
					description:
					`'logo': '../../../assets/icons/icon-96x96.png',
					'logoCustomClass': '',
					'logoId': 'loaderIcon',
					'icon': 'fa fa-spinner fa-spin',
					'iconCustomClass': 'icon',
					'iconId': 'questionIcon',
					'titleOne': 'please wait...',
					'titleOneId': 'confirmation',
					'titleOneCustomClass': '',
					'titleTwo': 'The document you are downloading is being authenticated against the SUKU Blockchain.',
					'titleTwoId': '',
					'titleTwoCustomClass': '',
					'titleThree': 'Please wait momentarily while this process completes...',
					'titleThreeId': '',
					'titleThreeCustomClass': '',
					'titleBoxCustomClass': '' `
				}
			]
		},
		{
			data: [
				{
					properties: 'form',
					type: '[String]',
					description: 'It defines FormGroup name.'
				},
				{
					properties: 'formArrayName',
					type: '[String]',
					description: 'It defines to form-array-name.'
				},
				{
					properties: 'CRDwollaTOSControl',
					type: '[String]',
					description: 'It defines to formcontrolname for CRDwollaTOS.'
				},
				{
					properties: 'CRDwollaTOSControl',
					type: '[String]',
					description: 'It defines to formcontrolname for CitizensReserveTOS.'
				},
				{
					properties: 'countriesList',
					type: '[String]',
					description: 'It corresponds to the value for countries list.'
				},
				{
					properties: 'businessTypeValue',
					type: '[String]',
					description: 'It corresponds to the value for states list.'
				},
				{
					properties: 'businessTypeValue',
					type: '[String]',
					description: 'It corresponds to the value for business type.'
				},
				{
					properties: 'industryTypeValue',
					type: '[String]',
					description: 'It corresponds to the value for industry type.'
				},
				{
					properties: 'businessClassificationValue',
					type: '[String]',
					description: 'It corresponds to the value for business classification.'
				},
				{
					properties: 'stateSelect',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'onSubmit',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'submitData',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'countrySelect',
					type: '[Output]',
					description: 'It helps the user to perform the required action using countrySelect .'
				},
				{
					properties: 'industryTypeFun',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'businessTypeFun',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
			]
		},
		{
			data: [
				{
					properties: 'chat',
					type: '[Object]',
					description: `description: 'It represents the list of labels & id eg.{labelOne: " your label",labelOneId: "your label id"}.
					labelOne: 'Negotiation Chat Box',
					labelOneId: 'negotiationChatBox',
					labelTwo: 'Chatting with:',
					labelTwoId: 'chattingWith'`
				},
				{
					properties: 'toUserName',
					type: '[String]',
					description: 'It corresponds to the value for other user name .'
				},
				{
					properties: 'toUserNameId',
					type: '[String]',
					description: 'It corresponds to the id for other user name.'
				},
				{
					properties: 'chatStatus',
					type: '[Boolean]',
					description: 'It defines the status of chat.'
				},
				{
					properties: 'messageData',
					type: '[Array]',
					description: 'It corresponds to the value for message data.'
				},
				{
					properties: 'sendMessageIconSrc',
					type: '[String]',
					description: 'It corresponds to the value for message icon.'
				},
				{
					properties: 'sendmessage',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'userAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'submitData',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
				{
					properties: 'userAction',
					type: '[Output]',
					description: 'It helps the user to perform the required action.'
				},
			]
		},
		{
			data: [
				{
					properties: 'title',
					type: '[String]',
					description: 'It corresponds to the value for title'
				},
				{
					properties: 'title-id',
					type: '[String]',
					description: 'It corresponds to the id for title.'
				},
				{
					properties: 'title-size',
					type: '[String]',
					description: 'It defines font-size for the title.'
				},
				{
					properties: 'title-color',
					type: '[String]',
					description: 'It defines font-color for the title.'
				},
				{
					properties: 'title-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for title.'
				},
				{
					properties: 'title-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for title.'
				},
				{
					properties: 'description',
					type: '[String]',
					description: 'It corresponds to the value for sub title'
				},
				{
					properties: 'description-id',
					type: '[String]',
					description: 'It corresponds to the id for description.'
				},
				{
					properties: 'description-size',
					type: '[String]',
					description: 'It defines font-size for the description.'
				},
				{
					properties: 'description-color',
					type: '[String]',
					description: 'It defines font-color for the description.'
				},
				{
					properties: 'description-weight',
					type: '[Number]',
					description: 'Weight corresponds to the font size for description.'
				},
				{
					properties: 'description-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for description.'
				},
				{
					properties: 'bg-color',
					type: '[String]',
					description: 'It corresponds to the value for background color.'
				},
				{
					properties: 'img-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for image.'
				},
				{
					properties: 'suku-response-logo',
					type: '[String]',
					description: 'It corresponds to the value for response logo '
				},
				{
					properties: 'icon',
					type: '[String]',
					description: 'It corresponds to the value for icon '
				},
				{
					properties: 'icon-id',
					type: '[String]',
					description: 'It corresponds to the id for icon.'
				},
				{
					properties: 'icon-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for icon.'
				},
				{
					properties: 'sub-custom-class',
					type: '[String]',
					description: 'The defines custom class attribute for sub.'
				},
			]
		},
		{
			data: [
				{
					properties: 'title',
					type: '[String]',
					description: 'It corresponds to the value for title'
				},
				{
					properties: 'classification',
					type: '[String]',
					description: 'It corresponds to value of classification.'
				},
				{
					properties: 'OnFileChange',
					type: '[Output]',
					description: 'It helps the user to perform the required action using OnFileChange.'
				},
				{
					properties: 'submitData',
					type: '[Output]',
					description: 'It helps the user to perform the required action using submitData.'
				}
			]
		},
	];

	/* Webcomponent details injects here */
	/* !important -- Provided ID for each content-data and webcomponentList should be same */
	public Content_DATA: WebCompContent[] = [
		{
			title: 'GETTING STARTED',
			description: `Welcome to SUKU's web component library! Here you will find a catalog of web components available for building SUKU applications. 

Let's get started: 
1) Select a component from the navigation menu.
2) Review the details information provided to use the component.
3) Use the sandbox at the bottom of each component page to test out the component and any inputs of your choosing.
			`,
			properties: this.Properties_DATA,
			codeSample: '',
			jsonSample: '',
			usage: ``,
			try: false,
			id: 0
		},
		{
			title: 'suku-heading',
			description: `renders all the font changes, paragraph breaks before and after, and any white space necessary to render the heading.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-heading> You just created suku-heading </suku-heading>',
			jsonSample: '',
			usage: ``,
			try: true,
			id: 1
		},
		{
			title: 'suku-sub-heading',
			description: `is used to help break up heading text. They improve the layout of a page and draw the attention of the readers.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-sub-heading> You just created suku-sub-heading </suku-sub-heading>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 2
		},
		{
			title: 'suku-profile-widget',
			description: `represents the user profile which consists of name, account-type, and ratings.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-profile-widget  user-name="Suku" account-type="Manufacturer"></suku-profile-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 3
		},
		{
			title: 'suku-rating-widget',
			description: `allows a user to submit a rating on a five-star scale.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-rating-widget  comment-size="16" comment-color="#b6b6b6" ></suku-rating-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 4
		},
		{
			title: 'suku-notification',
			description: `is to display the number of notifications for any provided category.`,
			properties: this.Properties_DATA,
			codeSample:
				'<suku-notification-widget  id="notification" notification-title="review bids" notification-value="0"></suku-notification-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 5
		},

		{
			title: 'suku-mail-widget',
			description: `provides a branded icon and email address link for the provided content.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-mail-widget name="dconway@suku.world" size="14" color="#3e3e3e"></suku-mail-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 6
		},
		{
			title: 'suku-bid-info',
			description: `shows the number of bids and the percentage fulfilled in a numerical form.`,
			properties: this.Properties_DATA,
			codeSample:
				'<suku-bid-info bids="374" percent="10%" bid-heading="bids"  percent-heading="fulfill"></suku-bid-info>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 8
		},
		{
			title: 'suku-match-chip',
			description: `shows the user all the matching products that are available, including a title and expiration date.`,
			properties: this.Properties_DATA,
			codeSample:
				'<suku-match-chip list-name="Super Computer" prize="10 SUKU" bid-heading="bids"  sell="seller"sell-v="John Smith"></suku-match-chip>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 9
		},
		{
			title: 'suku-card-line',
			description: `is used to display marketplace products and various statuses associated with them.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-card-line title-one="Super Computer" msg-status ="read" bg-color ="#ffffff"></suku-card-line>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 10
		},
		{
			title: 'suku-dashboard-profile',
			description: `shows the profile of a user with various functionalities, such as creating a new listing or new interest. The user can also review matches, negotiate purchases and various other functionalities.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-dashboard-profile user-name="Emery" title-one="CREATE NEW LISTING"></suku-dashboard-profile>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 11
		},
		{
			title: 'suku-nav-submenu',
			description: `provides a sub-navigation menu for more grainular navigation options.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-nav-submenu></suku-nav-submenu>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 12
		},
		{
			title: 'suku-progress-bar',
			description: `shows a series of steps to complete a process, such as a listing creation.`,
			properties: this.Properties_DATA,
			codeSample:
				'<suku-progress-bar progress-style-one="progressCompleted"  heading-one="first heading"></suku-progress-bar>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 13
		},
		{
			title: 'suku-home-italic-heading',
			description: `displays italic heading text.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-home-italic-heading size="20" > You just created suku-heading </suku-home-italic-heading>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 14
		},
		{
			title: 'suku-link',
			description: `provides a branded link to redirect a user.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-link size="14"> suku-link </suku-link>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 15
		},
		{
			title: 'suku-add-widget',
			description: `guides the end-users to create a new item, such as a listing or interest.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-add-widget size="12">ADD NEW LISTING</suku-add-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 16
		},
		{
			title: 'suku-select-input',
			description: `is used to give users a list of choices in a branded dropdown selector.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-select-input size="16" ></suku-select-input>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 17
		},
		{
			title: 'suku-phone-widget',
			description: `provides a branded icon and phone number for the provided content.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-phone-widget number="4806069863" ></suku-phone-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 18
		},
		{
			title: 'suku-address-widget',
			description: `provides a branded icon and address for the provided content.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-address-widget size="16" >ADD NEW LISTING</suku-address-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 19
		},
		{
			title: 'suku-inline-dropdown',
			description: `displays multiple selection options in a branded dropdown.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-inline-dropdown></suku-inline-dropdown>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 20
		},
		{
			title: 'suku-home-widget',
			description: `provides a branded link to redirect a user to the homepage.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-home-widget size="16" >home widget</suku-home-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 21
		},
		{
			title: 'suku-filter',
			description: `enables the filtering of a list. It can either be active or inactive.	`,
			properties: this.Properties_DATA,
			codeSample: '<suku-filter statusTypesDynamic="InsertArrayHere" ></suku-filter>',
			jsonSample: '',
			usage: '',
			try: false,
			id: 22,
		},
		{
			title: 'suku-info-button',
			description: `is a branded button that is used to direct a user to detailed information.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-info-button>Suku-info-button</suku-info-button>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 23
		},
		{
			title: 'suku-primary-button',
			description: `represents a branded "primary" button.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-primary-button>suku-primary-button</suku-primary-button>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 24
		},
		{
			title: 'suku-secondary-button',
			description: `represents a branded "secondary" button.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-secondary-button>suku-secondary-button</suku-secondary-button>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 25
		},
		{
			title: 'suku-default-button',
			description: `represents a branded "default" button.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-default-button>suku-default-button</suku-default-button>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 26
		},
		{
			title: 'suku-star-badge',
			description: `displays a branded badge with a start background.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-star-badge>5</suku-star-badge>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 27
		},
		{
			title: 'suku-search-input',
			description: `represents a search bar with an associated icon.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-search-input></suku-search-input>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 28
		},
		{
			title: 'suku-bid-tag',
			description: `displays a bid associated with products on the marketplace.<div class="d-flex">
			<blockquote>import <span>'SukuBidTagModule'</span> from <span>'suku-webcomponents';</span></blockquote>
			</div><div class="text-left">check show more info to know implementation.</div>`,
			properties: this.Properties_DATA,
			codeSample: '<suku-bid-tag prize="$100" ></suku-bid-tag>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 29
		},
		{
			title: 'suku-rating-star',
			description: `is used to display ratings between 1-5.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-rating-star rating-value="4" ></suku-rating-star>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 30
		},
		{
			title: 'suku-track-progress-bar',
			description: `displays various steps to view a trace tree.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-track-progress-bar> </suku-track-progress-bar>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 31
		},
		{
			title: 'suku-product-trace-widget',
			description: `helps users trace a product's details.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-product-trace-widget> </suku-product-trace-widget>',
			jsonSample: '',
			usage: '',
			try: false,
			id: 32
		},
		{
			title: 'suku-tree',
			description: `represents the products in a parent/child hierarchy.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-tree [tree-data]="assign your data here"></suku-tree>',
			jsonSample: [{
				_id: '5c45b8d37bccff62b4c83e4e',
				timestamp: '2019-01-21T11:41:31.921Z',
				children: ['Lx1002', 'Lx1003'],
				uid: 'Lx1001',
				product: {
					id: '1001',
					name: 'Intel I5 CPU QuadCore',
					description: 'HP Laptop'
				},
				links: [
					{
						_id: '5c45b8d37bccff62b4c83e4f',
						uid: 'Lx1000',
						type: 'usedIn'
					},
					{
						_id: '5c45bf6b7bccff62b4c83e53',
						uid: 'Lx1002',
						type: 'composedOf'
					},
					{
						_id: '5c45bf8a7bccff62b4c83e56',
						uid: 'Lx1003',
						type: 'composedOf'
					}
				],
				parent: 'Lx1000',
				__v: 0,
				depth: 0,
				relations: [
					{
						_id: '5c45bf6a7bccff62b4c83e51',
						timestamp: '2019-01-21T11:41:31.921Z',
						children: [],
						uid: 'Lx1002',
						product: {
							id: '1002',
							name: 'Intel I5 CPU Chip',
							description: 'CPU Chip'
						},
						links: [
							{
								_id: '5c45bf6a7bccff62b4c83e52',
								uid: 'Lx1001',
								type: 'usedIn'
							}
						],
						parent: 'Lx1001',
						__v: 0,
						depth: 1,
						relations: []
					}
				]
			}],
			usage: `Sample JSON Data:`,
			try: true,
			id: 33
		},
		{
			title: 'suku-ach-setting',
			description: `represents ACH settings UI.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-ach-setting></suku-ach-setting>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 34
		},
		{
			title: 'suku-transaction-history',
			description: `displays a table of a user's transaction history.`,
			properties: this.Properties_DATA,
			codeSample:
				'<suku-transaction-history [headings]="insert your array headings here" [transactionDetails]="insert your array variable here"></suku-transaction-history>',
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 35
		},
		{
			title: 'suku-dwolla-funding-agreement',
			description: `represents the funding agreement necessary to add a funding source. 

*In order to run this, please provide the formgroup name for form attribute i.e [form]="parent form name" and define formcontrolname in control attribute i.e control="{{insert your formcontrol name here}}. "(Submit)" is a eventemitter which defines the click action and provides form data."`,
			properties: this.Properties_DATA,
			codeSample: `<suku-dwolla-funding-agreement [form]="parentForm" control="checkAgreement" (submit)="submit($event)"></suku-dwolla-funding-agreement>`,
			jsonSample: ``,
			usage: ``,
			try: false,
			id: 36
		},
		{
			title: 'suku-beneficial-owner',
			description: `represents adding beneficial owners for the Dwolla onboarding process.

*In order run this, please provide the formgroup name for form attribute i.e [form]="parent form name" and define formArrayname in control attribute i.e control="{{insert your formcontrol name here}}. "(Submit)" is a eventemitter which defines the click action and provides form data.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-beneficial-owner [form]="parentForm" formArrayName="owner" checkBoxId="owner" control="checkOwner" (submit)="submit($event)"></suku-beneficial-owner>`,
			usage: `<pre>
	Formarrayname sample to be defined:
	owner: this.fb.array([]);
	'owner': is the formarray name.

	Push number of beneficial controls to be defined using the following sample code:
	(<FormArray>this.parentForm.get('owner')).push(this.control());
	'parentForm': is the formgroup name.

	Control names for formarray:

	control(): FormGroup {
		return this.fb.group({
			firstName: new FormControl(),
			lastName: new FormControl(),
			dateOfBirth: new FormControl(),
			ssn: new FormControl(),
			address: this.fb.group({
				address1: new FormControl(),
				address2: new FormControl(),
				city: new FormControl(),
				stateProvinceRegion: new FormControl({ value: '', disabled: true }),
				country: new FormControl(),
				postalCode: new FormControl(),
				document: ''
			})
		});
	}</pre>`,
			jsonSample: '',
			try: false,
			id: 37
		},
		{
			title: 'suku-dwolla-funding-source',
			description: `represents a funding source that is attached to a user's dwolla account.

Import Dwolla.js Library to run this:
<script src="https://cdn.dwolla.com/1/dwolla.js"></script>`,
			properties: this.Properties_DATA,
			codeSample: `<suku-dwolla-funding-source iav-token="4MTwIIvmwfq1jNttMrLrj7W0sxuE3cttpW56l4S4n8hJTiQoP4"></suku-dwolla-funding-source>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 38
		},
		{
			title: 'suku-confirmation-modal',
			description: `is a dialog component that is used to get confirmation feedback in different scenarios.<div class="d-flex">
			<blockquote>import <span>'SukuModalService'</span> from <span>'suku-webcomponents';</span></blockquote>
			</div><div class="text-left">check show more info to know implementation.</div>`,
			properties: this.Properties_DATA,
			codeSample: ``,
			jsonSample: ``,
			usage: `			<pre>
Usage:
import { SukuModalModule } from 'suku-webcomponents'; or
import { SukuWebcomponentsModule } from 'suku-webcomponents';
into 'app.module.ts';

constructor(private sukuService: SukuModalService){ }
openDialog() {
const data = {
 	icon': 'fa fa-question',
	iconCustomClass: '',
	titleOne: 'Are You Sure?',
	titleOneId: 'confirmation',
	titleTwo: 'Are you sure you'd like to delete this Listing?',
 ...
};
this.sukuService.openConfirmationDialog(data);

// 'onDialogClose' is a eventemitter, which is triggered on close of dialog.
this.sukuService.onDialogClose.subscribe(res => {
	if (res) {
	// action here
	}
});
}
			</pre>`,
			try: false,
			id: 39
		},
		{
			title: 'suku-proposal-header',
			description: `is a simple header widget.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-proposal-header></suku-proposal-header>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 40
		},
		{
			title: 'suku-governance-filter',
			description: `is a filter widget used to filter the proposal's based on proposal status, vote status and by proposal date.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-governance-filter [statusTypesDynamic]="insert your array here"></suku-governance-filter>`,
			jsonSample: [
				{
					displayName: 'Proposal Status',
					key: 'Proposal Status',
					checked: true,
					level: 0,
					label: true,
					hasSub: true,
					sub: [
						{
							displayName: 'Open',
							key: 'Open',
							level: 1,
							checked: false,
							hasSub: false,
							sub: []
						},
						{
							displayName: 'Closed',
							key: 'Closed',
							checked: false,
							level: 1,
							hasSub: false,
							sub: []
						}
					]
				},
				{
					displayName: 'Vote Status',
					key: 'Vote Status',
					checked: true,
					level: 0,
					label: true,
					hasSub: true,
					sub: [
						{
							displayName: 'Have Voted',
							key: 'Voted',
							checked: false,
							level: 1,
							hasSub: true,
							sub: []
						},
						{
							displayName: 'Have Not Voted',
							key: 'NotVoted',
							checked: false,
							level: 1,
							hasSub: false,
							sub: []
						}
					]
				}
			],
			usage: `Sample JSON Data:`,
			try: false,
			id: 41,
			preview: true
		},
		{
			title: 'suku-proposal-option-modal',
			description: `is a dialog component with proposal option information.
*In order to run this,  import 'SukuModalService' from suku-governance-webcomponent.`,
			properties: this.Properties_DATA,
			codeSample: ``,
			jsonSample: ``,
			usage: `
			<pre>
Usage:
constructor(private sukuService: SukuModalService){ }
openDialog() {
const data = {
 title : 'OPTION#1',
 contentOne : 'Project A',
 labelOne : 'Votes',
 ...
};
this.sukuService.openInfoModal(data);
}
			</pre>
			`,
			try: false,
			id: 42
		},
		{
			title: 'suku-list-proposal-choice-widget',
			description: `is a list of choices for a proposal.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-list-proposal-choice-widget [choiceOptions]="insert your data here"></suku-list-proposal-choice-widget>`,
			jsonSample: [{
				voteCount: '203.5 Million',
				btnSecondry: 'More Information',
				btnPrimary: 'Voted',
				projectName: ' sample Project A',
				optionId: '1',
				optionSummary: 'text of an unknown printer took a galley of type and scrambled it to make a type specimen book.',
				optionImg: 'https://s3-eu-west-1.amazonaws.com/farmplan-assets-live/sites/1/2019/02/Microsoft-logo_rgb_c-gray.png',
				optionImgId: 'image1',
				optionImgName: 'image1',
				IsBtnPrimary: false,
				teamMembersCustomArray: [
					{
						userName: 'Larry',
						userNameId: 'Larry',
						userDesignation: 'Project Manager',
						userDesignationId: 'Project Manager',
						userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmUpYYHhalvLQxph1FulRdB6yx-JLqee73jF1UM8FCE6prCve',
						userImgId: 'user1',
						socialMedia: [
							{
								name: 'telegram',
								link: 'xyz',
								icon: 'fa fa-telegram',
								id: 'telegram'
							},
							{
								name: 'twitter',
								link: 'xyz',
								icon: 'fa fa-twitter-square',
								id: 'twitter'
							},
							{
								name: 'linkedin',
								link: 'xyz',
								icon: 'fa fa-linkedin-square',
								id: 'linkedIn'
							},
							{
								name: 'github',
								link: 'xyz',
								icon: 'fa fa-github-alt',
							}
						],
						path: '/pathName',
						disabled: false,
						id: 'user'
					}
				]
			}],
			usage: `Sample JSON Data:`,
			try: true,
			id: 43
		},
		{
			title: 'suku-doughnut-chart-widget',
			description: `is a doughnut chart widget that represents the breakdown of the votes.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-doughnut-chart-widget [doughnutChartData]="insert data here"></suku-doughnut-chart-widget>`,
			jsonSample: [
				['Choice #01', 20000],
				['Choice #02', 30000],
				['Choice #03', 40000],
				['Choice #04', 50000]
			],
			usage: `Sample JSON Data:`,
			try: true,
			id: 44
		},
		{
			title: 'suku-homepage-button',
			description: `is used to display the available features.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-homepage-button></suku-homepage-button>`,
			jsonSample: ``,
			usage: `
	<pre>
Sample Data: {
   title: 'Marketplace',
   icon: 'fa fa-shopping-cart',
   path: '/marketplaceDashboard',
   disabled: true,
   id: 'Marketplace'
};
	</pre>
			`,
			try: true,
			id: 45
		},
		{
			title: 'suku-form-footer',
			description: `is a simple form footer.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-form-footer></suku-form-footer>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 46
		},
		{
			title: 'suku-text-editor',
			description: `is a simple text editor.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-text-editor></suku-text-editor>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 47
		},
		{
			title: 'suku-bid-widget',
			description: `displays bid details associated with products on the marketplace.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-bid-widget></suku-bid-widget>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 48
		},
		{
			title: 'suku-date',
			description: `displays a formatted date.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-date></suku-date>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 49
		},
		{
			title: 'suku-shipping-info-widget',
			description: `displays the shipping infromation.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-shipping-info-widget widgetTitle="Shipping Information" firstName="shipper name" addressOne="mailingAddress"
			addressTwo="mailingAddressTwo"city="name of the city," state="name of the state"
			zip="70525" country="name of the country"></suku-shipping-info-widget>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 50
		},
		{
			title: 'suku-social-icons',
			description: `It helps the user to view the social media pages.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-social-icons></suku-social-icons>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 51
		},
		{
			title: 'suku-terms-and-conditions',
			description: `is used to verify and Acknowledge.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-terms-and-conditions></suku-terms-and-conditions>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 52
		},
		{
			title: 'suku-header',
			description: `is a header with title and content.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-header></suku-header>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 53
		},
		{
			title: 'suku-image-widget',
			description: `is used to display image .`,
			properties: this.Properties_DATA,
			codeSample: `<suku-image-widget></suku-image-widget>`,
			jsonSample: ``,
			usage: ``,
			try: true,
			id: 54
		},
		{
			title: 'suku-card-line-type-two',
			description: `is used to display marketplace products and various status associated with them.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-card-line-type-two></suku-card-line-type-two>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 55
		},
		{
			title: 'suku-radio-button',
			description: `It is used to select one out of many options.`,
			properties: this.Properties_DATA,
			codeSample: `<suku-radio-button></suku-radio-button>`,
			jsonSample: '',
			usage: '',
			try: false,
			id: 56,
			previewRadio:true
		},
		{
			title: 'suku-card-title',
			description: `It used to display interest details `,
			properties: this.Properties_DATA,
			codeSample: '<suku-card-title></suku-card-title>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 57
		},
		{
			title: 'suku-rating-card-line',
			description: `It used to display rating details `,
			properties: this.Properties_DATA,
			codeSample: '<suku-rating-card-line></suku-rating-card-line>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 58
		},
		{
			title: 'suku-progress-bar-type-one',
			description: `shows a series of steps to complete a process.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-progress-bar-type-one ></suku-progress-bar-type-one>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 59
		},
		{
			title: 'suku-progress-bar-type-two',
			description: `shows a series of steps to complete a process.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-progress-bar-type-two ></suku-progress-bar-type-two>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 60
		},
		{
			title: 'suku-payment-portal-help',
			description: `shows a series of steps to complete a process.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-payment-portal-help></suku-payment-portal-help>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 61
		},
		{
			title: 'suku-profile-header',
			description: `is to display profile details.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-profile-header></suku-profile-header>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 62
		},
		{
			title: 'suku-funding-source',
			description: `it is used to display and add funding source.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-funding-source></suku-funding-source>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 63
		},
		{
			title: 'Suku-loader',
			description: `used as the loader. To try it use the bellow sample code and pass the object as input for the function. 
Note: import suku-modal in .ts file`,
			properties: this.Properties_DATA,
			codeSample: '<suku-loader></suku-loader>',
			jsonSample: `
			'logo': '../../../assets/icons/icon-96x96.png',
			'logoCustomClass': '',
			'logoId': 'loaderIcon',
			'icon': 'fa fa-spinner fa-spin',
			'iconCustomClass': 'icon',
			'iconId': 'questionIcon',
			'titleOne': 'please wait...',
			'titleOneId': 'confirmation',
			'titleOneCustomClass': '',
			'titleTwo': 'The document you are downloading is being authenticated against the SUKU Blockchain.',
			'titleTwoId': '',
			'titleTwoCustomClass': '',
			'titleThree': 'Please wait momentarily while this process completes...',
			'titleThreeId': '',
			'titleThreeCustomClass': '',
			'titleBoxCustomClass': '' `,
			usage: '',
			try: false,
			id: 64
		},
		{
			title: 'suku-create-customer',
			description: `used for the creation of customers to try this refer the properties below, create form, formcontrolname and more from below list of properties to view the screen.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-create-customer></suku-create-customer>',
			jsonSample: '',
			usage: '',
			try: false,
			id: 65
		},
		{
			title: 'suku-chat-widget',
			description: `is used to chat with another user.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-chat-widget></suku-chat-widget>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 66
		},
		{
			title: 'suku-response',
			description: `is used to show the response.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-response></suku-response>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 67
		},
		{
			title: 'suku-creation-customer-fileupload',
			description: `is used to upload documents according to the classification..`,
			properties: this.Properties_DATA,
			codeSample: '<suku-creation-customer-fileupload classification ="business" ></suku-creation-customer-fileupload>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 68
		},
		{
			title: 'suku-checkbox',
			description: `is used to select multiple options.`,
			properties: this.Properties_DATA,
			codeSample: '<suku-checkbox></suku-checkbox>',
			jsonSample: '',
			usage: '',
			try: true,
			id: 69
		},
	
	];

	/* declaring heading for sidebar block */
	public webcomponentList() {
		const listName = [
			'Getting Started',
			'Heading',
			'Sub Heading',
			'Profile Widget',
			'Rating Widget',
			'Rating Widget',
			'Notification',
			'Mail Widget',
			'Bid Info',
			'Match Chip',
			'Card Line',
			'Dashboard Profile',
			'Sub Menu',
			'Progress Bar',
			'Italic Heading',
			'SUKU Link',
			'Add Widget',
			'Select Input',
			'Phone Widget',
			'Address Widget',
			'Inline Dropdown',
			'Home Widget',
			'Filters',
			'Info Button',
			'Primary Button',
			'Secondary Button',
			'Default Button',
			'Star Badge',
			'Search Input',
			'Bid Tag',
			'Rating Star',
			'Track and Trace Progress Bar',
			'Product Trace Widget',
			'Trace Tree',
			'Ach Settings',
			'Transaction History',
			'Dwolla Funding Agreement',
			'Beneficial Owner',
			'Dwolla Funding Source',
			'Confirmation Modal',
			'Proposal Header',
			'Governance Filter',
			'Proposal Option Modal',
			'List Proposal Choice Widget',
			'Doughnut Chart Widget',
			'Form Footer',
			'Text Editor'
		];
		const webCompNamelist = [];
		listName.forEach((name, index) => {
			const obj = {
				name: name,
				id: index
			}
			webCompNamelist.push(obj);
		});
		console.log("listName", JSON.stringify(webCompNamelist));
		return [
			{
				name: 'Getting Started',
				id: 0
			},
			{
				name: 'Heading',
				id: 1
			},
			{
				name: 'Sub Heading',
				id: 2
			},
			{
				name: 'Profile Widget',
				id: 3
			},
			{
				name: 'Rating Widget',
				id: 4
			},
			{
				name: 'Notification',
				id: 5
			},
			{
				name: 'Mail Widget',
				id: 6
			},
			{
				name: 'Bid Info',
				id: 8
			},
			{
				name: 'Match Chip',
				id: 9
			},
			{
				name: 'Card Line',
				id: 10
			},
			{
				name: 'Dashboard Profile',
				id: 11
			},
			{
				name: 'Sub Menu',
				id: 12
			},
			{
				name: 'Progress Bar',
				id: 13
			},
			{
				name: 'Italic Heading',
				id: 14
			},
			{
				name: 'SUKU Link',
				id: 15
			},
			{
				name: 'Add Widget',
				id: 16
			},
			{
				name: 'Select Input',
				id: 17
			},
			{
				name: 'Phone Widget',
				id: 18
			},
			{
				name: 'Address Widget',
				id: 19
			},
			{
				name: 'Inline Dropdown',
				id: 20
			},
			{
				name: 'Home Widget',
				id: 21
			},
			{
				name: 'Filters',
				id: 22
			},
			{
				name: 'Info Button',
				id: 23
			},
			{
				name: 'Primary Button',
				id: 24
			},
			{
				name: 'Secondary Button',
				id: 25
			},
			{
				name: 'Default Button',
				id: 26
			},
			{
				name: 'Star Badge',
				id: 27
			},
			{
				name: 'Search Input',
				id: 28
			},
			{
				name: 'Bid Tag',
				id: 29
			},
			{
				name: 'Rating Star',
				id: 30
			},
			{
				name: 'Track and Trace Progress Bar',
				id: 31
			},
			{
				name: 'Product Trace Widget',
				id: 32
			},
			{
				name: 'Trace Tree',
				id: 33
			},
			{
				name: 'Ach Settings',
				id: 34
			},
			{
				name: 'Transaction History',
				id: 35
			},
			{
				name: 'Dwolla Funding Agreement',
				id: 36
			},
			{
				name: 'Beneficial Owner',
				id: 37
			},
			{
				name: 'Dwolla Funding Source',
				id: 38
			},
			{
				name: 'Confirmation Modal',
				id: 39
			},
			{
				name: 'Proposal Header',
				id: 40
			},
			{
				name: 'Governance Filter',
				id: 41
			},
			{
				name: 'Proposal Option Modal',
				id: 42
			},
			{
				name: 'List Proposal Choice Widget',
				id: 43
			},
			{
				name: 'Doughnut Chart Widget',
				id: 44
			},
			{
				name: 'Homepage Button',
				id: 45
			},
			{
				name: 'Form Footer',
				id: 46
			},
			{
				name: 'Text Editor',
				id: 47
			},
			{
				name: 'Bid Widget',
				id: 48
			},
			{
				name: 'Display Date',
				id: 49
			},
			{
				name: 'Shipping Info Widget',
				id: 50
			},
			{
				name: 'Social icons',
				id: 51
			},
			{
				name: 'Suku Terms and Conditions',
				id: 52
			},
			{
				name: 'Suku Header',
				id: 53
			},
			{
				name: 'Suku Image Widget',
				id: 54
			},
			{
				name: 'Card Line Type Two',
				id: 55
			},
			{
				name: 'Radio Button',
				id: 56
			},
			{
				name: 'Suku Card Title',
				id: 57
			},
			{
				name: 'Rating Card Line',
				id: 58
			},
			{
				name: 'Progress Bar Type One',
				id: 59
			},
			{
				name: 'Progress Bar Type Two',
				id: 60
			},
			{
				name: 'Payment Portal Help',
				id: 61
			},
			{
				name: 'Suku Profile Header',
				id: 62
			},
			{
				name: 'Suku Funding Source',
				id: 63
			},
			{
				name: 'Suku Loader',
				id: 64
			},
			{
				name: 'Suku Create Customer',
				id: 65
			},
			{
				name: 'Suku Chat Widget',
				id: 66
			},
			{
				name: 'Suku Response',
				id: 67
			},
			{
				name: 'Suku Creation Customer Fileupload',
				id: 68
			},
			{
				name: 'Suku Checkbox',
				id: 69
			}
		];
	}
}

/* to be removed */
export const person = {
	name: {
		label: 'Name',
		value: 'Parashuram',
		type: 'text',
		validation: {
			required: false
		}
	}
};

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
	mockSample: any;
	try: boolean;
	id: number;
}
@Injectable({
	providedIn: 'root'
})
export class WebComponentsServices {
	public Properties_DATA: WebCompProperties[] = [
		{
			data: [
				{
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{ properties: 'weight', type: '[number]', description: 'weight corresponds to the font size.' },
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'user-name',
					type: '[string]',
					description: 'it represents the below username.'
				},
				{ properties: 'nameweight', type: '[number]', description: 'weight corresponds to the font size.' },
				{
					properties: 'name-customclass ',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet'
				},
				{
					properties: 'name-size',
					type: '[string]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'name-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'account-type',
					type: '[string]',
					description: 'A manufacturer  provides goods or services relating to the item being designed, typically prototype or production components.'
				},
				{
					properties: 'account-size',
					type: '[number]',
					description: 'Corresponds to the value of size which is passed to the directive.'
				},
				{
					properties: 'account-weight',
					type: '[number]',
					description: 'weight corresponds to the font size'
				},
				{
					properties: 'account-customclass',
					type: '[string]',
					description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'users',
					type: '[string]',
					description:
						'The user are the end-users who can be buyer or seller.'
				},
				{
					properties: 'commentsize',
					type: '[string]',
					description:
						'The comment-size describes how large or small the user shares his feedback about the product and transactions.'
				},
				{
					properties: 'commentweight',
					type: '[string]',
					description:
						' The comment-weight corresponds to the font size of the comment-size.'
				},
				{
					properties: 'commentcolor',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'comment',
					type: '[string]',
					description:
						'A product description is the marketing copy used to describe a product value proposition to potential customers.'
				},
				{
					properties: 'rating-value',
					type: '[string]',
					description:
						' Rating value shows the users feedback about the product .'
				},
			]
		},

		{
			data: [
				{
					properties: 'id',
					type: '[string]',
					description: 'If you need to support more than one instance of notification  at a time.'
				},
				{
					properties: 'notification-title',
					type: '[string]',
					description: 'It represents the name of the specific notification. This is submitted with the form data.'
				},
				{
					properties: 'notification-value ',
					type: '[number]',
					description:
						'  It shows the value of its corresponing title.'
				}
			]
		},
		{
			data: [
				{
					properties: 'name',
					type: '[string]',
					description: 'it represents the maid id of a user. Example: username@mail.com'
				},
				{
					properties: 'size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				}
			]
		},
		{
			data: [
				{
					properties: 'bid',
					type: '[number]',
					description: 'A bid is an offer made by an investor, trader or dealer to buy a product.'
				},
				{
					properties: 'bid-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'bid-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'bid-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading',
					type: '[string]',
					description:
						' Bid-heading is also sometimes referred to as advance bidding or pre-bidding to end users.'
				},
				{
					properties: 'bid-heading-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'bid-heading-color',
					type: '[string]',
					description: 'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'percent ',
					type: '[string]',
					description:
						'To determine the strength of a bid.'
				},
				{
					properties: 'percent-size',
					type: '[number]',
					description:
						'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'percent-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'percent-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'percent-heading',
					type: '[string]',
					description: 'Allows determine exactly which demand sources are participating.'
				},
				{
					properties: 'percent-heading-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'percent-heading-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'percent-heading-weight',
					type: '[number]',
					description:
						'weight corresponds to the font size.'
				}

			]
		},
		{
			data: [
				{
					properties: 'bid',
					type: '[number]',
					description: 'A bid is an offer made by an investor, trader or dealer to buy a product.'
				},
				{
					properties: 'bid-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'bid-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'bid-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading',
					type: '[string]',
					description:
						' Bid-heading is also sometimes referred to as advance bidding or pre-bidding to end users.'
				},
				{
					properties: 'bid-heading-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'bid-heading-color',
					type: '[number]',
					description: 'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'bid-heading-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'percent ',
					type: '[string]',
					description:
						'To determine the strength of a bid.'
				},
				{
					properties: 'percent-size',
					type: '[string]',
					description:
						'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'percent-color',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'percent-weight',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'percent-heading',
					type: '[number]',
					description: 'Allows determine exactly which demand sources are participating.'
				},
				{
					properties: 'percent-heading-size',
					type: '[number]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'percent-heading-color ',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'percent-heading-weight',
					type: '[string]',
					description:
						'weight corresponds to the font size.'
				}

			]
		},
		{
			data: [
				{
					properties: 'image',
					type: '[string]',
					description: ' An image is a picture that has been created or copied and stored in electronic form.'
				},
				{
					properties: 'chat-read-icon',
					type: '[string]',
					description: 'The  check mark will appear when all participants in the group have received your message.'
				},
				{
					properties: 'chat-unread-icon',
					type: '[string]',
					description: 'The message counts next to the  icon to be read.'
				},
				{
					properties: 'msg-status',
					type: '[string]',
					description:
						' A status message can tell other users the current status.'
				},
				{
					properties: 'customclass',
					type: '[string]',
					description:
						' Bid-heading is also sometimes referred to as advance bidding or pre-bidding to end users.'
				},
				{
					properties: 'custom-icon-class',
					type: '[string]',
					description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
				},
				{
					properties: 'bg-color',
					type: '[string]',
					description: 'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'interest',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'title-one ',
					type: '[string]',
					description:
						'To determine the strength of a bid.'
				},
				{
					properties: 'title-one-color',
					type: '[string]',
					description:
						'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'title-one-weight',
					type: '[number]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'title-one-size',
					type: '[number]',
					description: 'weight corresponds to the font size.'
				},
				{
					properties: 'content-one',
					type: '[string]',
					description: 'Allows determine exactly which demand sources are participating.'
				},
				{
					properties: 'content-one-color',
					type: '[string]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'content-one-weight',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'content-one-size',
					type: '[number]',
					description:
						'weight corresponds to the font size.'
				},
				{
					properties: 'sub-title-two',
					type: '[string]',
					description: 'Allows determine exactly which demand sources are participating.'
				},
				{
					properties: 'sub-title-two-color',
					type: '[string]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'sub-title-two-weight',
					type: '[number]',
					description:
						'weight corresponds to the font size.'
				},
				{
					properties: 'sub-title-two-size',
					type: '[number]',
					description:
						'weight corresponds to the font size.'
				},
				{
					properties: 'sub-title-three',
					type: '[number]',
					description: 'Allows determine exactly which demand sources are participating.'
				},
				{
					properties: 'sub-title-three-color',
					type: '[string]',
					description: 'Corresponds to the value of font-size which is passed to the directive.'
				},
				{
					properties: 'sub-title-three-weight',
					type: '[number]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'sub-title-three-color',
					type: '[string]',
					description:
						'weight corresponds to the font size.'
				},
				{
					properties: 'content-three',
					type: '[string]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'content-three-color',
					type: '[string]',
					description:
						'weight corresponds to the font size.'
				},
				{
					properties: 'content-three-weight',
					type: '[number]',
					description:
						'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
				},
				{
					properties: 'content-three-size',
					type: '[number]',
					description:
						'weight corresponds to the font size.'
				}

			]
		},
		{
			data: [
				{
					properties: 'user-name',
					type: '[string]',
					description: ' it represents the below username.'
				},
				{
					properties: 'image',
					type: '[string]',
					description: ' An image is a picture that has been created or copied and stored in electronic form.'
				},
				{
					properties: 'icon',
					type: '[string]',
					description: ' Icons help users quickly identify the type of file represented by the icon.'
				},
				{
					properties: 'title-one ',
					type: '[string]',
					description:
						'Title0one contains descriptive keywords to clearly and accurately convey the contents.'
				},
				{
					properties: 'title-two',
					type: '[string]',
					description:
						'If you need to support more than one instance of title  at a time .'
				},
				{
					properties: 'create-new-listing',
					type: '[string]',
					description:
						'Create new listing navigates the user to start a new listing for his product.'
				},
			]
		},
		{
			data: [
				{
					properties: 'name',
					type: '[string]',
					description: ' it represents the below username.'
				},
				{
					properties: 'id',
					type: '[number]',
					description: ' If you need to support more than one instance of notification  at a time.'
				},
				{
					properties: 'submenulist',
					type: '[number]',
					description: ' [object]=[{name,id}].'
				},
			]
		},
{
		data: [
			{
				properties: 'progress-style-one',
				type: '[string]',
				description: ' it represents the progress as completed.'
			},
			{
				properties: 'progress-style-two',
				type: '[number]',
				description: '  it represents the progress as active.'
			},
			{
				properties: 'progress-style-three',
				type: '[number]',
				description: ' It represents the progress as upcoming.'
			},
			{
				properties: 'progress-style-four',
				type: '[number]',
				description:
					' It represents the progress as upcoming.'
			},
			{
				properties: 'progress-style-five',
				type: '[number]',
				description:
					' It represents the progress as upcoming .'
			},
			{
				properties: 'heading-one',
				type: '[string]',
				description:
					'it represents the below contents.'
			},
			{
				properties: 'heading-two',
				type: '[string]',
				description: ' it represents the below contents.'
			},
			{
				properties: 'heading-three',
				type: '[string]',
				description: 'it represents the below contents.'
			},
			{
				properties: 'heading-four',
				type: '[string]',
				description:
					'it represents the below contents.'
			},
			{
				properties: 'heading-five',
				type: '[string]',
				description:
					'it represents the below contents.'
			},
			{
				properties: 'heading-one-id',
				type: '[string]',
				description:
					'If you need to support more than one instance of title  at a time.'
			},
			{
				properties: 'heading-two-id',
				type: '[string]',
				description: 'If you need to support more than one instance of title  at a time.'
			},
			{
				properties: 'heading-three-id',
				type: '[string]',
				description: 'If you need to support more than one instance of title  at a time.'
			},
			{
				properties: 'heading-four-id',
				type: '[string]',
				description:
					'If you need to support more than one instance of title  at a time.'
			},
			{
				properties: 'heading-five-id',
				type: '[string]',
				description:
					'If you need to support more than one instance of title  at a time .'
			},
			{
				properties: 'max',
				type: '[string]',
				description:
					' it is the maximum length of the progress bar.'
			},
		]
	},
	{
		data: [
			{
				properties: 'name',
				type: '[string]',
				description: 'it represents the maid id of a user. Example: username@mail.com'
			},
			{
				properties: 'size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'weight',
				type: '[number]',
				description: 'weight corresponds to the font size.'
			},
			{
				properties: 'color ',
				type: '[string]',
				description:
					'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
			},
			{
				properties: 'customclass',
				type: '[string]',
				description:
					'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			}
		]
	},
	{
		data: [
			{
				properties: 'name',
				type: '[string]',
				description: 'it represents the maid id of a user. Example: username@mail.com'
			},
			{
				properties: 'size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'weight',
				type: '[number]',
				description: 'weight corresponds to the font size.'
			},
			{
				properties: 'color ',
				type: '[string]',
				description:
					'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
			},
			{
				properties: 'customclass',
				type: '[string]',
				description:
					'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
			{
				properties: 'action',
				type: '[string]',
				description:
					' The response when the link is navigated to the required page or content.'
			}
		]
	},
	{
		data: [
			{
				properties: 'name',
				type: '[string]',
				description: 'it represents the maid id of a user. Example: username@mail.com'
			},
			{
				properties: 'size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'weight',
				type: '[number]',
				description: 'weight corresponds to the font size.'
			},
			{
				properties: 'color ',
				type: '[string]',
				description:
					'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
			},
			{
				properties: 'customclass',
				type: '[string]',
				description:
					'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
			{
				properties: 'action',
				type: '[string]',
				description:
					' The response when the link is navigated to the required page or content.'
			}
		]
	},
	{
		data: [
			{
				properties: 'title',
				type: '[string]',
				description: ' it represents the contents below.'
			},
			{
				properties: 'size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'weight',
				type: '[number]',
				description: 'weight corresponds to the font size.'
			},
			{
				properties: 'color ',
				type: '[string]',
				description:
					'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
			},
			{
				properties: 'customclass',
				type: '[string]',
				description:
					'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
			{
				properties: 'options',
				type: '[string]',
				description:
					' Specifies that the user is required to select a value before submitting the form.'
			}
		]
	},
	{
		data: [
			{
				properties: 'number',
				type: '[string]',
				description: ' String of specific numbers that a telephone or cell phone user can dial to reach the end user.'
			},
			{
				properties: 'size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'weight',
				type: '[number]',
				description: 'weight corresponds to the font size.'
			},
			{
				properties: 'color ',
				type: '[string]',
				description:
					'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
			},
			{
				properties: 'customclass',
				type: '[string]',
				description:
					'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
		]
	},
	{
		data: [
			{
				properties: 'name',
				type: '[string]',
				description: ' element identifies contact information relevant to the current site.'
			},
			{
				properties: 'size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'weight',
				type: '[number]',
				description: 'weight corresponds to the font size.'
			},
			{
				properties: 'color ',
				type: '[string]',
				description:
					'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
			},
			{
				properties: 'customclass',
				type: '[string]',
				description:
					'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
		]
	},
	{
		data: [
			{
				properties: 'name',
				type: '[string]',
				description: 'it guides the end user to select the required optiion.'
			},
			{
				properties: 'size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'weight',
				type: '[number]',
				description: 'weight corresponds to the font size.'
			},
			{
				properties: 'color ',
				type: '[string]',
				description:
					'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
			},
			{
				properties: 'customclass',
				type: '[string]',
				description:
					'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
			{
				properties: 'action',
				type: '[string]',
				description:
					' It expands the contents below.'
			}
		]
	},
	{
		data: [
			{
				properties: 'name',
				type: '[string]',
				description: 'it represents the contents below.'
			},
			{
				properties: 'id',
				type: '[number]',
				description: 'If you need to support more than one instance of title  at a time.'
			},
			{
				properties: 'color ',
				type: '[string]',
				description:
					'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
			},
			{
				properties: 'bgcolor',
				type: '[string]',
				description:
					'The background-color CSS property sets the background color of an element.'
			},
			{
				properties: 'routerlink',
				type: '[string]',
				description:
					' routerlink is giving the user feedback about which route bach to the home page.'
			}
		]
	},
	{
		data: [
			{
				properties: 'heading',
				type: '[string]',
				description: 'heading is the title or topic of a document.'
			},
			{
				properties: 'sub-heading',
				type: '[string]',
				description: 'subheading is any of the headings under which each of the main divisions of a subject may be subdivided.'
			},
			{
				properties: 'status-types-dynamic ',
				type: '[string]',
				description:
					' statustypes dynamic are used for fields that can take predefined values, such as check-boxes.'
			},
		]
	},
	{
		data: [
			{
				properties: 'name',
				type: '[string]',
				description: 'it guides the end user to select the required optiion.'
			},
			{
				properties: 'id',
				type: '[number]',
				description: 'If you need to support more than one instance of title  at a time.'
			},
			{
				properties: 'action',
				type: '[string]',
				description:
					' It expands the contents below.'
			}
		]
	},
	{
		data: [
			{
				properties: 'name',
				type: '[string]',
				description: 'They are assigned with general names to be idetical.'
			},
			{
				properties: 'id',
				type: '[number]',
				description: 'If you need to support more than one instance of title  at a time.'
			},
			{
				properties: 'action',
				type: '[string]',
				description:
					' It helps the user to perform the required action.'
			}
		]
	},
	{
		data: [
			{
				properties: 'name',
				type: '[string]',
				description: 'They are used instead if primary buttons.'
			},
			{
				properties: 'id',
				type: '[number]',
				description: 'If you need to support more than one instance of title  at a time.'
			},
			{
				properties: 'action',
				type: '[string]',
				description:
					' It helps the user to perform the required action.'
			}
		]
	},
	{
		data: [
			{
				properties: 'name',
				type: '[string]',
				description: 'They are used instead if primary buttons and secondary buttons.'
			},
			{
				properties: 'id',
				type: '[number]',
				description: 'If you need to support more than one instance of title  at a time.'
			},
			{
				properties: 'action',
				type: '[string]',
				description:
					' It helps the user to perform the required action.'
			}
		]
	},
	{
		data: [
			{
				properties: 'icon',
				type: '[string]',
				description: 'It is used to represent the user and can often identify the Scratcher.'
			},
			{
				properties: 'value',
				type: '[number]',
				description: 'Rating the feeback to the buyer or seller from an end user.'
			},
		]
	},
	{
		data: [
			{
				properties: 'form-radio',
				type: '[string]',
				description: 'The text-box helps the user to enter the search string they require.'
			},
			{
				properties: 'icon',
				type: '[string]',
				description: 'Used to identify the searh box to fetch the required data.'
			},
			{
				properties: 'customclass',
				type: '[string]',
				description:
					'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
		]
	},
	{
		data: [
			{
				properties: 'prize',
				type: '[number]',
				description: 'The value assigned to the product by a buyer or seller.'
			},
			{
				properties: 'prize-size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'prize-weight',
				type: '[number]',
				description:
					'weight corresponds to the font size.'
			},
			{
				properties: 'prize-color',
				type: '[string]',
				description: 'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value..'
			},
			{
				properties: 'prize-customclass',
				type: '[string]',
				description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
			{
				properties: 'unit',
				type: '[number]',
				description:
					'unit indicates the cost per product or bid placed.'
			},
			{
				properties: 'unit-size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'unit-weight',
				type: '[number]',
				description:
					'weight corresponds to the font size.'
			},
			{
				properties: 'unit-color',
				type: '[string]',
				description: 'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value.'
			},
			{
				properties: 'unit-customclass',
				type: '[string]',
				description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
			{
				properties: 'q-content',
				type: '[string]',
				description:
					' The quantity per product in the bid.'
			},
			{
				properties: 'q-size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'q-weight',
				type: '[number]',
				description:
					'weight corresponds to the font size.'
			},
			{
				properties: 'q-color',
				type: '[string]',
				description: 'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value..'
			},
			{
				properties: 'q-customclass',
				type: '[string]',
				description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
			{
				properties: 'p-content',
				type: '[string]',
				description:
					'The bids placed for each products  .'
			},
			{
				properties: 'p-size',
				type: '[number]',
				description: 'Corresponds to the value of font-size which is passed to the directive.'
			},
			{
				properties: 'p-weight',
				type: '[number]',
				description:
					'weight corresponds to the font size.'
			},
			{
				properties: 'p-color',
				type: '[string]',
				description: 'The color data type represents a color in the sRGB color space. color may also include an alpha-channel transparency value..'
			},
			{
				properties: 'p-customclass',
				type: '[string]',
				description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
		]
	},
	{
		data: [
			{
				properties: 'rating',
				type: '[number]',
				description: 'The feedback given by the buyer or seller to the product.'
			},
			{
				properties: 'customclass',
				type: '[string]',
				description: 'The class attribute specifies one or more classnames for an element and is mostly used to point to a class in a style sheet.'
			},
			{
				properties: 'value',
				type: '[number]',
				description:
					' The rating value feedback in terms of star to the product.'
			},
		]
	},
	];

	public Content_DATA: WebCompContent[] = [
		{
			title: 'Suku-Heading',
			description: `A heading element implies all the font changes, paragraph breaks before and after,
    		and any white space necessary to render the heading.`,
			properties: this.Properties_DATA,
			mockSample: `<pre class="docs-markdown-pre">
    		<code class="lang-html docs-markdown-code m-3">
    		<span class="hljs-tag">&lt;<span class="hljs-name">suku-heading</span>&gt;<span class="hljs-attr"> You just created suku-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-heading</span>&gt;</span>
    		<span class="hljs-tag">&lt;<span class="hljs-name">suku-heading color="#a7be2f" size="50"</span>&gt;<span class="hljs-attr"> You just modified suku-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-heading</span>&gt;</span>
    		</code>
    		</pre>
    		`,
			try: true,
			id: 1
		},
		{
			title: 'Suku-sub-heading',
			description: `Subheadings are a good way to break up writing.
   			 They improve the layout of a page and draw the attention of the readers.`,
			properties: this.Properties_DATA,
			mockSample: `<pre class="docs-markdown-pre">
    		<code class="lang-html docs-markdown-code m-3">
    		<span class="hljs-tag">&lt;<span class="hljs-name">suku-sub-heading</span>&gt;<span class="hljs-attr"> You just created suku-sub-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-sub-heading</span>&gt;</span>
        	<span class="hljs-tag">&lt;<span class="hljs-name">suku-sub-heading color="#a7be2f" size="50"</span>&gt;<span class="hljs-attr"> You just modified suku-sub-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-sub-heading</span>&gt;</span>
    		</code>
    		</pre>`,
			try: true,
			id: 2
		},
		{
			title: 'suku-profile-widget',
			description: `suku-profile-widget represents the user profile in brief which consists of name, account-type and ratings.`,
			properties: this.Properties_DATA,
			mockSample: `<pre><code class="language-html f14" data-lang="html">
    		<span class="hljs-name">&lt;suku-profile-widget</span>  <span class="na">user-name=</span><span class="s">"Vairog"</span> <span class="na">account-type=</span><span class="s">"Manufacturer"</span><span class="hljs-name">&gt;&lt;/suku-profile-widget&gt;</span>
                       </code></pre>`,
			try: true,
			id: 3
		},
		{
		title: 'suku-rating-widget',
		description: ` suku-rating-widget that consists of suku-rating-star and comments reasoning the star.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-rating-widget</span>  <span class="na">comment-size=</span><span class="s">"16"</span> <span class="na">coment-color=</span><span class="s">"red"</span> <span class="hljs-name">&gt;&lt;/suku-rating-widget&gt;</span>
				   </code></pre>`,
		try: true,
		id: 4
	},
	{
		title: 'notification',
		description: `  suku-notification-widget is to notify the number of notification that shows on the widget.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-notification-widget</span>  <span class="na">id=</span><span class="s">"notification"</span> <span class="na">notification-title=</span><span class="s">"review bids"</span> <span class="na">notification-value=</span><span class="s">"0"</span><span class="hljs-name">&gt;
		&lt;/suku-notification-widget&gt;</span>
				   </code></pre>`,
		try: true,
		id: 5
	},

	{
		title: 'mail-widget',
		description: `  suku-mail-widget can be a message that may contain text, files, images, or other
		attachments sent through a network to a specified individual or group of individuals`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-mail-widget</span> <span class="na">name=</span><span class="s">"dconway@vairog.com"</span> <span class="na">size=</span><span class="s">"14"</span> <span class="na">color=</span><span class="s">"#3e3e3e"</span> <span class="hljs-name">&gt;&lt;/suku-mail-widget&gt;</span>
				   </code></pre>`,
		try: true,
		id: 6
	},
	{
		title: 'bid-info',
		description: `suku-bid-info shows the number of bids and the percentage fulfilled in a numerical form.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-bid-info</span> <span class="na">bids=</span><span class="s">"374"</span> <span class="na">percent=</span><span class="s">"10%"</span> <span class="na">bid-heading=</span><span class="s">"bids"</span>  <span class="na">percent-heading=</span><span class="s">"fulfill"</span>  <span class="hljs-name">&gt;&lt;/suku-bid-info&gt;</span>
				   </code></pre>`,
		try: true,
		id: 8
	},
	{
		title: 'match-chip',
		description: `suku-match-chip shows the user all the matching product that is available with its Title-card and expiry-date.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-match-chip</span> <span class="na">list-name=</span><span class="s">"Super Computer"</span> <span class="na">prize=</span><span class="s">"10 SUKU"</span> <span class="na">bid-heading=</span><span class="s">"bids"</span>  <span class="na">sell=</span><span class="s">"seller"</span><span class="na">sell-v=</span><span class="s">"John Smith"</span>   <span class="hljs-name">&gt;&lt;/suku-match-chip&gt;</span>
				   </code></pre>`,
		try: true,
		id: 9
	},
	{
		title: 'card-line',
		description: `suku-match-chip shows the user all the matching product that is available with its Title-card and expiry-date.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-card-line</span> <span class="na">list-name=</span><span class="s">"Super Computer"</span> <span class="na">prize=</span><span class="s">"10 SUKU"</span> <span class="na">bid-heading=</span><span class="s">"bids"</span>  <span class="na">sell=</span><span class="s">"seller"</span><span class="na">sell-v=</span><span class="s">"John Smith"</span>   <span class="hljs-name">&gt;&lt;/suku-card-line&gt;</span>
				   </code></pre>`,
		try: true,
		id: 10
	},
	{
		title: 'suku-dashboard-profile',
		description: `Suku-Dashboard-Profile shows the profile of a user either buyer or seller with various functionalities like: creating new listing or new interest, etc.The user can also view the review matches, negotiate purchase and many other functions.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-dashboard-profile</span> <span class="na">user-name=</span><span class="s">"Emery"</span> <span class="na">title-one=</span><span class="s">"CREATE NEW LISTING"</span><span class="na">title-two=</span><span class="s">"CREATE NEW INTEREST"</span><span class="hljs-name">&gt;&lt;/suku-dashboard-profile&gt;</span>
				   </code></pre>`,
		try: true,
		id: 11
	},
	{
		title: 'suku-sub-menu',
		description: ` suku-nav-submenu guides user to navigate sub-menus under main menu. For example:"BUY" is a main-menu and under it "Interests and Matches" are the sub-menus.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-tag">&lt;<span class="hljs-name">suku-nav-submenu</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-nav-submenu</span>&gt;</span>
				   </code></pre>`,
		try: true,
		id: 12
	},
	{
		title: 'suku-progress-bar',
		description: `   suku-progress-bar implies the steps to follow one after another. Also emphasizes which step the user is in.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-name">&lt;suku-progress-bar</span> <span class="na">progress-style-one=</span><span class="s">"progressCompleted"</span> <span class="na"> heading-one=</span><span class="s">"first heading"</span><span class="hljs-name">&gt;&lt;/suku-progress-bar&gt;</span>
				   </code></pre>`,
		try: true,
		id: 13
	},
	{
		title: 'suku-home-italic-heading',
		description: `   suku home italic heading elements marks text to be displayed as italic.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-tag">&lt;<span class="hljs-name">suku-home-italic-heading</span> <span class="na">size=</span><span class="s">"20"</span> &gt;<span class="hljs-attr"> You just created suku-heading </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-home-italic-heading</span>&gt;</span>
				   </code></pre>`,
		try: true,
		id: 14
	},
	{
		title: 'suku-link',
		description: ` The link can redirect the user to the required content in detail.`,
		properties: this.Properties_DATA,
		mockSample: `<pre><code class="language-html f14" data-lang="html">
		<span class="hljs-tag">&lt;<span class="hljs-name">suku-link</span><span class="na">size=</span><span class="s">"16"</span>  &gt;<span class="hljs-attr"> ADD NEW LISTING</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-link</span>&gt;</span>
				   </code></pre>`,
		try: true,
		id: 15
	},
	{
	title: 'add-widget',
	description: `suku-add-widget guides the end users to create a new listing or interest.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-add-widget</span> <span class="na">size=</span><span class="s">"12"</span>&gt;<span class="hljs-attr">ADD NEW LISTING</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-add-widget</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 16
},
{
	title: 'suku-select-input',
	description: `suku-input-control makes convenient to input the accurate information. For example: mail placeholder may contain @ symbol.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-select-input</span> <span class="na">size=</span><span class="s">"16"</span> &gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-select-input</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 17
},
{
	title: 'suku-phone-widget',
	description: ` suku-phone-widget represents the contact information of a user.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-phone-widget</span> <span class="na">number=</span><span class="s">"4806069863"</span> &gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-phone-widget</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 18
},
{
	title: 'suku-address-widget',
	description: ` The suku-address-widget element identifies address information of buyer and seller for tracking purpose.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-address-widget</span> <span class="na">size=</span><span class="s">"16"</span> &gt;<span class="hljs-attr">ADD NEW LISTING</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-address-widget</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 19
},
{
	title: 'suku-inline-dropdown',
	description: ` suku-inline-dropdown represents multiple selection options in a box.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-inline-dropdown</span>&gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-inline-dropdown</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 20
},
{
	title: 'suku-home-widget',
	description: ` suku-Home-widget is a link to redirect user to the homepage.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-home-widget</span> <span class="na">size=</span><span class="s">"16"</span> &gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-home-widget</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 21
},
{
	title: 'suku-filter',
	description: ` suku-filters guides to filter the list of user requirements. It can be either active or inactive,etc.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-filters</span> <span class="na">statusTypesDynamic=</span><span class="s">"InsertArrayHere"</span> &gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-filter</span>&gt;</span>
			   </code></pre>`,
	try: false,
	id: 22
},
{
	title: 'info-button',
	description: ` suku-info-button is a clickable navigators that lets user perform an action and get response according to it. For example: "Apply Filters" are the info-buttons..`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-info-button</span>&gt;<span class="hljs-attr">Suku-info-button</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-info-button</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 23
},
{
	title: 'primary-button',
	description: `  primary buttons are mostly used by the user.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-primary-button</span>&gt;<span class="hljs-attr">Suku-primary-button</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-primary-button</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 24
},
{
	title: 'secondary-button',
	description: ` secondary buttons tends to be less used by the user.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-secondary-button</span>&gt;<span class="hljs-attr">Suku-secondary-button</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-secondary-button</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 25
},
{
	title: 'default-button',
	description: `  suku-default-button represents the general default buttons that are clickable navigators and lets user perform an action and get response according to it.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-default-button</span>&gt;<span class="hljs-attr">Suku-default-button</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-default-button</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 26
},
{
	title: 'star-badge',
	description: ` star-badge idicates the users identity or the brand they represent.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-star-badge</span>&gt;<span class="hljs-attr"></span></span>5<span class="hljs-tag">&lt;/<span class="hljs-name">suku-star-badge</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 27
},
{
	title: 'search-input',
	description: `search box  matches  the items in its database and returns the search results.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-search-input</span>&gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-search-input</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 28
},
{
	title: 'bid-tag',
	description: `  suku-bid-tag shows the detail about the bid with number of items and price.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-bid-tag</span> &gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-bid-tag</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 29
},
{
	title: 'rating-star',
	description: `suku-rating-star shows the users feedback about the product,etc.`,
	properties: this.Properties_DATA,
	mockSample: `<pre><code class="language-html f14" data-lang="html">
	<span class="hljs-tag">&lt;<span class="hljs-name">suku-rating-star</span> <span class="na">rating-value=</span><span class="s">"4"</span> &gt;<span class="hljs-attr"></span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-rating-star</span>&gt;</span>
			   </code></pre>`,
	try: true,
	id: 30
},
// {
// 	title: 'card-line',
// 	description: ` suku-card-line is a container that consists of required elements. For example the container consists of Mailbox, Title-card, Title-content,etc.`,
// 	properties: this.Properties_DATA,
// 	mockSample: `<pre><code class="language-html f14" data-lang="html">
// 	<span class="hljs-tag">&lt;<span class="hljs-name">suku-add-widget</span> <span class="na">size=</span><span class="s">"16"</span> &gt;<span class="hljs-attr">ADD NEW LISTING</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">suku-add-widget</span>&gt;</span>
// 			   </code></pre>`,
// 	try: true,
// 	id: 31
// },
	];

	public webcomponentList() {
		return [
			{
				name: 'Getting started',
				id: 0
			},
			{
				name: 'Heading',
				id: 1
			},
			{
				name: 'Sub-heading',
				id: 2
			},
			{
				name: 'Profile widget',
				id: 3
			},
			{
				name: 'Rating widget',
				id: 4
			},
			{
				name: 'Notification',
				id: 5
			},
			{
				name: 'Mail widget',
				id: 6
			},
			{
				name: 'Bid Info',
				id: 8
			},
			{
				name: 'Match chip',
				id: 9
			},
			{
				name: 'Card line',
				id: 10
			},
			{
				name: 'Dashboard-Profile',
				id: 11
			},
			{
				name: 'Sub-menu',
				id: 12
			},
			{
				name: 'progress-bar',
				id: 13
			},
			{
				name: 'Italic-Heading',
				id: 14
			},
			{
				name: 'suku-link',
				id: 15
			},
			{
				name: 'add-widget',
				id: 16
			},
			{
				name: 'select-input',
				id: 17
			},
			{
				name: 'phone-widget',
				id: 18
			},
			{
				name: 'address-widget',
				id: 19
			},
			{
				name: 'inline-dropdown',
				id: 20
			},
			{
				name: 'home-widget',
				id: 21
			},
			{
				name: 'filters',
				id: 22
			},
			{
				name: 'Info-button',
				id: 23
			},
			{
				name: 'primary-button',
				id: 24
			},
			{
				name: 'secondary-button',
				id: 25
			},
			{
				name: 'default-button',
				id: 26
			},
			{
				name: 'star-badge',
				id: 27
			},
			{
				name: 'search input',
				id: 28
			},
			{
				name: 'bid tag',
				id: 29
			},
			{
				name: 'rating-star',
				id: 30
			},
			// {
			// 	name: 'card-line',
			// 	id: 31
			// }
		];
	}
}
export const person = {
    name: {
      label: 'Name',
      value: 'Parashuram',
      type: 'text',
      validation: {
        required: false
      }
    }
}

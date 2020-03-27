<template lang="pug">
	.section.home
		.container.home__content.d-flex.align-items-center.justify-content-center
			b-card.custom-card.position-relative
				.card-bg.position-absolute
				b-navbar.row(toggleable='sm', type='dark', variant='transparent')
					b-navbar-brand(href='/') Vue練習
					b-navbar-toggle(target='nav-collapse')
					b-collapse#nav-collapse(is-nav='')
						b-navbar-nav
							b-nav-item(href='#') Link
							b-nav-item(href='#' disabled='') Disabled
							b-nav-item-dropdown(text='Page' right='')
								b-dropdown-item(href='/homeworkEC') homeworkEC
								b-dropdown-item(href='#') ES
								b-dropdown-item(href='#') RU
								b-dropdown-item(href='#') FA
							b-nav-item-dropdown(right='')
								// Using 'button-content' slot
								template(v-slot:button-content='')
									em User
								b-dropdown-item(href='#') Profile
								b-dropdown-item(href='#') Sign Out
						b-navbar-nav.ml-auto
							b-nav-form
								b-form-input.mr-sm-2(size='sm' placeholder='Search')
								b-button.my-2.my-sm-0(size='sm' variant="outline-primary" type='button') Search
				b-card-text
					b-row
						b-col(cols="6")
							.d-flex.align-items-start.justify-content-center.flex-column.h-100
								h1.white--text Ｗaitting's Test Region
								span.white--text.text-left 層層堆疊的美味搭配濃郁起司、酥炸鮮嫩培根來滿足你的味蕾，培根加量、 起士加量，嚴選重磅100%澳洲純牛肉，經過高溫直火烘烤， 完美鎖住肉汁原味，大口咬下肉香四溢，肉食主義者絕對不能錯過！
								b-input-group.pt-5
									b-form-input(type='text' placeholder="虛婷婷你在幹嘛？" style="border-radius:20px 0 0 20px;")
									b-input-group-append
										b-button(variant='primary' style="border-radius:0px 20px 20px 0;") Button
						b-col(cols="6")
									img.img-fluid(:src="img" style="max-height:300px;border-radius: 7px;")
				
		
				span.rectangle.position-absolute(style="transform: rotate(47deg);bottom: -40px;left: 15%;")
				span.circle.position-absolute(style="top: -28px;left: -43px;")
				svg.triangle.position-absolute(width="80" height="80" style="transform: rotate(17deg);right: -46px;top: 34px;")
					polygon.triangle-polygon(points="40,15 65,65 15,65")
</template>

<script>
export default {
    name: 'home',
    props: {
        msg: String
    },
    data() {
        return {
            img:
                'https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$bgImg: 'https://images.unsplash.com/photo-1559160582-eab6966b680f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80';

.home {
    margin-top: -60px;
    &__content {
        height: calc(100vh);
    }
    background-image: url($bgImg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    .custom-card {
        background-color: rgba(black, 0.3);
        border: none;
        box-shadow: 3px 15px 35px rgba(black, 0.6);
        border-radius: 10px;
        .card-bg {
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 0;
            overflow: hidden;
            &:after {
                content: '';
                position: absolute;
                left: -20px;
                right: -20px;
                top: -20px;
                bottom: -20px;
                border-radius: 10px;
                filter: blur(10px);
                background-image: url($bgImg);
                background-size: 100% auto;
                background-attachment: fixed;
            }
        }
    }
    $itemBlue: #6cdafe;
    $itemPink: #fe6cb9;
    $itemPurple: #9c70ff;
    $size: 80px;
    $item-border-width: 15px;
    .rectangle,
    .circle {
        display: block;
    }
    .rectangle {
        width: $size;
        height: $size;
        border: $item-border-width solid $itemPurple;
        /*filter: drop-shadow(3px 4px 25px #9c70ff);*/
        box-shadow: 3px 3px 25px #9c70ff, 3px 3px 25px $itemPurple inset;
    }
    .circle {
        width: $size;
        height: $size;
        border: $item-border-width solid $itemPink;
        border-radius: 100%;
        box-shadow: 3px 3px 25px $itemPink, 3px 3px 25px $itemPink inset;
    }
    .triangle {
        filter: drop-shadow(3px 3px 19px $itemBlue);
        &-polygon {
            fill: transparent;
            stroke: $itemBlue;
            stroke-width: $item-border-width;
        }
    }
}
</style>

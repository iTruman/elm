<template>
	<div>
		<transition name="move">
			<div class="foodinfo" v-show="showFlag">
				<div class="image">
					<img :src="food.image">
				</div>

				<div class="content">
					<h2 class="name">{{ food.name }}</h2>
					<p class="desc">{{ food.description }}</p>
					<div class="extra">
						<span>月售{{ food.sellCount }}份</span>
						<span>好评率{{ food.rating }}%</span>
					</div>
					<div class="price">
						<span class="now">￥{{food.price}}</span>
						<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
					</div>
					<div class="cartcontrol-wrapper">
						<cartcontrol :food="food"></cartcontrol>
					</div>
				</div>
			</div>
		</transition>

		<transition name="fade">
			<div class="food-mask" v-show="showFlag" @click.stop.prevent="hideFood"></div>
		</transition>

	</div>
</template>

<script>
	import cartcontrol from 'components/cartcontrol/cartcontrol';

	export default {
		props: {
			food: {
				type: Object
			}
		},
		data() {
			return {
				showFlag: false
			}
		},
		methods: {
			show() {
				this.showFlag = true;
			},
			hideFood() {
				this.showFlag = false;
			}
		},
		components: {
			cartcontrol
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.foodinfo
		position: fixed
		left: 12.5%
		top: 20%
		bottom: 0
		z-index: 16
		width: 75%
		height: 55%
		background: #FFF
		border-radius: 5px
		transform: translate3d(0,0,0)
		&.move-enter-active,&.move-leave-active
			transition: all .5s
		&.move-enter,&.move-leave-active
			transform: translate3d(0,-100%,0)
			opacity: 0
		.image
			width: 100%
			height: 70%
			top: 0
			display: block;
			position: relative;
			border-radius: 5px 5px 0 0;
			img
				display: block
				width: 100%
				height: 100%
		.content
			padding: 13px
			.cartcontrol-wrapper
				right: 7px
				bottom: 7px
	.food-mask
		position: fixed
		top: 0
		left:0
		bottom: 0
		width: 100%
		z-index: 13
		background: rgba(0,0,0,.5)
		opacity: 1
		&.fade-enter-active, &.fade-leave-active
			transition: all .5s
		&.fade-enter, &.fade-leave-active
			opacity: 0
</style>

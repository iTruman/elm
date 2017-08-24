<template>
	<transition name="move">
		<div class="food" v-show="showFlag" ref="food">
			<div class="food-wrapper">
				<div class="banner">
					<img :src="food.image">
					<div class="back" @click="hide">
			        	<i class="icon-arrow_left"></i>
			        </div>
				</div>

				<div class="content">
					<h1 class="name">{{ food.name }}</h1>
					<div class="detail">
						<span class="sell-count">月售{{ food.sellCount }}份</span>
						<span class="rating">好评率{{ food.rating }}%</span>
					</div>
					<div class="price">
						<span class="now">￥{{food.price}}</span>
						<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
					</div>
				</div>

				<div class="cartcontrol-wrapper">
					<cartcontrol :food="food" v-on:cartadd="_add"></cartcontrol>
				</div>
				<shopcart ref="shopcart" v-show="false"></shopcart>
				<div @click.stop.prevent="addFirst($event)" class="buy" v-show="!food.count || food.count===0">加入购物车</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import Vue from 'vue';
	import BScroll from 'better-scroll';
	import shopcart from 'components/shopcart/shopcart';
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
				this.$nextTick(() => {
					if (!this.scroll) {
						this.scroll = new BScroll(this.$refs.food, {
							click: true
						});
						this.scroll.refresh();
					}
				})
			},
			hide() {
				this.showFlag = false;
			},
			addFirst(event) {
				if (!event._constructed) {
    				return;
    			}
				Vue.set(this.food, 'count', 1);
			},
			_add(target) {
		    	// 体验优化，异步执行下落动画
		    	this.$nextTick(() => {
		    		console.log(event.target)
		    		this.$refs.shopcart.drop(event.target);
		    	});
		    }
		},
		components: {
			shopcart,
			cartcontrol
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.food
		position: fixed
		left: 0
		top: 0
		bottom: 48px
		z-index: 8
		width: 100%
		background: #FFF
		border-radius: 5px
		transform: translate3d(0,0,0)
		&.move-enter-active,&.move-leave-active
			transition: all .5s
		&.move-enter,&.move-leave-active
			transform: translate3d(100%,0,0)
			opacity: 0
		.banner
			position: relative
			width: 100%
			height: 0
			padding-top: 100%
			img
				position: absolute
				top: 0
				left: 0
				width: 100%
				height: 100%
			.back
				position: absolute
				top: 10px
				left:0
				.icon-arrow_left
					display: block
					padding: 10px
					font-size: 20px
					color: #FFF
		.content
			padding: 18px
			.name
				font-size: 16px
				line-height: 16px
				margin-bottom: 18px
				font-weight: 700
				color: rgb(7,17,27)
			.detail
				margin-bottom: 18px
				line-height: 10px
				height: 10px
				font-size: 0
				.sell-count, .rating
					font-size: 10px
					color: rgb(147,153,159)
				.sell-count
					margin-right: 12px
			.price
				font-weight: 700
				line-height: 24px
				.now
					margin-right: 8px
					font-sieze: 14px
					color: rgb(240, 20, 20)
				.old
					text-decoration: line-through
					font-size: 10px
					color: rgb(147, 153, 159)
		.cartcontrol-wrapper
			position: absolute
			right: 12px
			bottom: 12px
		.buy
			position: absolute
			right: 18px
			bottom: 18px
			height: 24px
			line-height: 24px
			padding: 0 12px
			box-sizing: border-box
			font-size: 10px
			border-radius: 12px
			color: #FFF
			background: rgb(0, 160, 220)
</style>

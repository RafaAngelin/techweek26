const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{CentrarEm: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{jogador: 0},
	{Sólido: 0},
	{chao: 0},
	{fundo: 0},
	{chave: 0},
	{Texto: 0},
	{porta: 0},
	{lava: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Toque: 0},
	{chaves: 0}
];

self.InstanceType = {
	jogador: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	fundo: class extends self.ISpriteInstance {},
	chave: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	porta: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Toque: class extends self.IInstance {}
}
// This file is @generated by prost-build.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FfxivGameUiOutput {
    #[prost(message, optional, tag = "2")]
    pub character_selection: ::core::option::Option<
        super::ffxiv_toolkit_components::FfxivCharacterSelection,
    >,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FfxivGameOutput {
    #[prost(message, optional, tag = "1")]
    pub scene_update: ::core::option::Option<super::game_renderer::SceneUpdate>,
    #[prost(message, optional, tag = "2")]
    pub ui_update: ::core::option::Option<FfxivGameUiOutput>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, Copy, PartialEq, ::prost::Message)]
pub struct FfxivGameInput {
    #[prost(uint64, optional, tag = "1")]
    pub input_actions_set: ::core::option::Option<u64>,
}
